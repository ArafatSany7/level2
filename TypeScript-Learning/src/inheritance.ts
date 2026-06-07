class Parent {
  constructor(
    public name: string,
    public age: number,
    public address: string,
  ) {}

  //   COMMON METHOD
  getSleep(numberOfHour: number) {
    console.log(`${this.name} Banda ${numberOfHour} ghumai`);
  }
}

class Student extends Parent {}

class Teacher extends Parent {
  constructor(
    public name: string,
    public age: number,
    public address: string,
    public designation: string,
  ) {
    super(name, age, address);
  }

  takeClass(numberOfClass: number) {
    console.log(`${this.name} ${numberOfClass} ghonta class nei`);
  }
}

const student1 = new Student("Modu ", 14, "BD");
student1.getSleep(12);

const teacher1 = new Teacher("Jodu", 45, "Deshi", "lecturer");

console.log(teacher1.address);
teacher1.takeClass(5);

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}
console.log("RUNNING...");
console.log(filterEvenNumbers([1, 2, 43, 3, 4, 5, 6]));
