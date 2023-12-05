class Animal {
  constructor(name, isParaplegic) {
    this.name = name;
    this.isParaplegic = isParaplegic;
    this.children = [];
  }

  giveBirth(childName) {
    this.children.push(childName);
  }
}

const cat = new Animal("Fluffy", false);

cat.giveBirth("Dolly");
console.log(cat.children); // prints an array with 1 item: ["Dolly"]
