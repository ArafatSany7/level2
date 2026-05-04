// TYPE GAURD
// IN TYPEOF
type AlphaNumeric = number | string;

const add = (num1: AlphaNumeric, num2: AlphaNumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

const add1 = add(2, 3);
const add2 = add(2, "3");

console.log(add1);
console.log(add2);

// IN GAURD

type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "Admin";
};
const getUserInfo = (user: NormalUser | AdminUser) => {
  //in gaurd
  if ("role" in user) {
    console.log(`This ${user.name} and his role is : ${user.role}`);
  } else {
    console.log(`This ${user.name} `);
  }
};
getUserInfo({ name: "Normal", role: "Admin" });
