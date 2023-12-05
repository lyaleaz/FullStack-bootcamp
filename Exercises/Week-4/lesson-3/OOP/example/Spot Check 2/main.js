class Human {
  constructor(name, age, Friendly) {
    this.name = name;
    this.age = age;
    this.Friendly = Friendly;
  }
}

const h1 = new Human("Mark", 31, true);
console.log(
  `${h1.name}, who is ${h1.age} years old, is ${
    h1.Friendly ? "friendly" : "not friendly"
  }`
); //prints "Mark, who is 31 years old, is friendly"
