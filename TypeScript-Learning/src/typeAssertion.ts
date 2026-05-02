let anything: any;
anything = 784;
anything as number;

const kgToGram = (input: string | number): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split("");
    return `converted output is : ${Number(value) * 1000}`;
  }
};

const result = kgToGram(2) as number;
console.log(result);
const result2 = kgToGram("2kg") as string;
console.log(result2);
