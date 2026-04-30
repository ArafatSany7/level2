// FUNCTION 1.ARROW FUNCTION , 2.NORMAL FUNCTION

function add(num1: number, num2: number): number {
  //():NUMBER EITAR MADDHOME RETURN TYPE NUMBER HOBE MENTION KORE DILAM
  return num1 + num2;
}
add(2, 5);

//ARROW FUNCTION
const add2 = (num1: number, num2: number): number => num1 + num2;

add2(5, 8);
// OBJECT ER MODDHE FUCNTION DEFINE KORLE TAKE METHOD BOLE

const poor = {
  name: "Arafat",
  balance: 7,

  addBalance(value: number): number {
    const total = this.balance + value;
    return total;
  },
};

poor.addBalance(4576);

//CALLBACK FUNCTION
const arr: number[] = [1, 4, 7];
const sqrArr = arr.map((elem: number): number => elem * elem);
