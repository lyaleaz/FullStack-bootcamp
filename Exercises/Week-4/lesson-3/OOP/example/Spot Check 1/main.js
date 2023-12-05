const someModule = function () {
  const _somethingPrivate = 3;

  const exposePrivates = () => _somethingPrivate;

  return {
    exposePrivates: exposePrivates,
  };
};

const m = someModule();
console.log(m.exposePrivates()); // prints 3

class Animal {
  constructor(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
  }
}
const dog = new Animal("Bo", 3);
console.log(dog.name);
