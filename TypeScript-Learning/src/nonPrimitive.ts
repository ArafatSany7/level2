// array , object

let list1 = ["eggs", "milk", "oil"];

let list: string[] = ["eggs", "milk", "oil"];

// list.push(23)

let list2Mixed = ["eggs", "milk", "oil", 45, 80, 190];
list2Mixed.push("rice", 234);

let coordinate: [number, number] = [20, 30];

// let coordinate: [number, number] = [20, 30,40];

let nameAndRoll: [string, number] = ["Sany", 190];
// tuple as much need neya jabe

// REFERENCE TYPE : OBJECT
const user: {
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  firstName: "Md",
  middleName: "Arafat",
  lastName: "Sany",
};
const user2: {
  firstName: "Arafat"; //VALUE KE AMRA TYPE HISEBE BEBOHARR KORCHI , EITA KOKHONOI CHANGE HOBENA
  middleName?: string; //   OPTIONAL TYPE DEYAR SOMOY ? DEYA LAGBE
  lastName: string;
  readonly isMarried: boolean; //ACCESS MODIFIER , ISMARRIED R CHANGE KORA JABENA
} = {
  firstName: "Arafat",
  lastName: "Sany",
  isMarried: false,
};

console.log(user2);
