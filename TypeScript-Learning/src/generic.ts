// DYNAMICALLY GENERIZE

type GenericArray<value> = Array<value>;

// const friends: string[] = ["jodu", "modu", "kodu"];
const friends: GenericArray<string> = ["jodu", "modu", "kodu"];

// const rollNumber: number[] = [4, 2, 55];
const rollNumber: GenericArray<number> = [4, 2, 55];

const isEligibleList: GenericArray<boolean> = [true, false, false];

type Coordinate<X, Y> = [X, Y];
const coordinate1: Coordinate<number, number> = [30, 50];
const coordinate2: Coordinate<string, string> = ["30", "50"];

// GENERIC IN OBJECT

const userList: GenericArray<{ name: string; age: number }> = [
  {
    name: "sany",
    age: 14,
  },
  {
    name: "modu",
    age: 76,
  },
];
