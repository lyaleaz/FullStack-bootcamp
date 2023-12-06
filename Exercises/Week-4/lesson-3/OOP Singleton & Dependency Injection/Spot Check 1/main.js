class LuxuryFeeder {
  getFood(animalType) {
    if (animalType == "lion") {
      return "chia seeds";
    }
    if (animalType == "elephant") {
      return "peanuts";
    }

    return "scraps";
  }
}
const feeder = new LuxuryFeeder();
console.log(feeder.getFood("monkey"));

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  _consume(food) {
    console.log("Just consumed " + food + ". Feels good.");
  }

  eat() {
    const food = feeder.getFood(this.type);
    this._consume(food);
  }
}
const bumdo = new Animal("Bumdo", "elephant");
bumdo.eat();
class CheapFeeder {
  getFood(animalType) {
    return "scraps";
  }
}

const luxuryFeeder = new LuxuryFeeder();
const cheapFeeder = new CheapFeeder();
let weArePoor = false;
let relevantFeeder;

if (weArePoor) {
  relevantFeeder = cheapFeeder;
  n;
} else {
  relevantFeeder = luxuryFeeder;
}

const bisma = new Animal(
  "Bisma",
  "lion",
  /*injection ->*/ relevantFeeder /*<- injection*/
);
bisma.eat();
/*class Animal {
    constructor(name, type, feeder) {
        this.name = name
        this.type = type
        this.feeder = feeder //dependency injection!
    }

    _consume(food) {
        console.log("Just consumed " + food + ". Feels good.")
    }

    eat() {
        const food = this.feeder.getFood(this.type)
        this._consume(food)
    }
} */
