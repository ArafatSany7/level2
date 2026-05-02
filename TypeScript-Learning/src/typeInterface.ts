type user = {
  name: string;
  age: number;
};
// INTERFACE SHUDU OBJECT ER JONNE KAJ KORBE EG. ARRAY,FUNCTION,OBJECT
interface Iuser {
  name: string;
  age: number;
}

type roll = {
  role: "admin" | "user";
};

type userWithRole = user & roll;

const user1: IUserWithRoll = {
  name: "sany",
  age: 14,
  role: "admin",
};
const user2: Iuser = {
  name: "modu",
  age: 34,
};

// premitive datar khetre
type IsAdmin = boolean;
const isAdmin: IsAdmin = false;

interface IUserWithRoll extends Iuser {
  role: "admin" | "user";
}

// FUNCTION EXAMPLE
// type Add = (num1: number, num2: number) => number;

interface Iadd {
  (num1: number, num2: number): number;
}

const add: Iadd = (num1, num2) => num1 + num2;
