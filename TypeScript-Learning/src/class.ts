// OPP - CLASS - OBJECT

// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   makesound() {
//     console.log(`${this.name} is making sound ${this.sound}`);
//   }
// }

// PARAMETER PROPERTIES
class Animal {
  //   name: string;
  //   species: string;
  //   sound: string;

  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }

  makesound() {
    console.log(`${this.name} is making sound ${this.sound}`);
  }
}

const dog = new Animal("Dogesh ", "Dog", "gheo  gheo");
const cat = new Animal("Billu ", "Bilai", "mew mew");

console.log(dog.name);
console.log(cat.sound);
cat.makesound();

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}
console.log("RUNNING...");
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
