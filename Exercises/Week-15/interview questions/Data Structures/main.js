let people = [];
let p1 = {
  id: "a0x3",
  name: "Candice",
  age: 23,
};

let p2 = {
  id: "q113z",
  name: "Jay",
  age: 16,
};

let p3 = {
  id: "kl991",
  name: "Drew",
  age: 31,
};

people.push(p1);
people.push(p2);
people.push(p3);
//insert: O(1)
people["a0x3"] = { name: "Candice", age: 23 };
people["q113z"] = { name: "Jay", age: 16 };
people["kl1991"] = { name: "Drew", age: 31 };

//find: O(1)
const findPerson = function (personID) {
  return people[personID];
};

//update: O(1)
const updatePerson = function (personID, newName) {
  return (people[personID].name = newName);
};

//remove: O(1)
const removePerson = function (personID) {
  delete people[personID];
};
const findOver18 = function () {
  return people.filter((p) => p.age > 18);
};
class SillyArray {
  constructor() {
    this.sillyStuff = [];
    this.sillyLength = 0;
  }

  print() {
    console.log(this.sillyStuff);
  }

  push(stuff) {
    this.sillyStuff[this.sillyLength] = stuff;
    this.sillyLength++;

    this.sillyStuff[this.sillyLength] = stuff;
    this.sillyLength++;
  }

  annihilate() {
    this.sillyStuff = [];
  }
}

let myStuff = new SillyArray();
myStuff.push("Roger");
console.log(myStuff.sillyLength); //prints 2
myStuff.print(); //prints ["Roger", "Roger"]
myStuff.push("Rabbit");
console.log(myStuff.sillyLength); //prints 4
myStuff.print(); //prints [ 'Roger', 'Roger', 'Rabbit', 'Rabbit' ]
myStuff.annihilate();
myStuff.print(); // prints []
