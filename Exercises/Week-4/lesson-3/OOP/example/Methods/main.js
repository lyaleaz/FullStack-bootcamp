class Animal {
  constructor(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
  }

  giveBirth(name) {
    console.log("Boom. Birthed " + name);
  }
}
const cat = new Animal("Puss", 4);
cat.giveBirth("Dolly"); // prints "Boom. Birthed Dolly"
