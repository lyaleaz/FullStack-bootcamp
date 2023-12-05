/* class Vehicle {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
/*
  getInfo() {
    console.log("Cars are great");
  }
  calculateMoney() {
    console.log("Made " + 30000 * Vehicle.carsSold + " dollars");
  }

Vehicle.getInfo();
Vehicle.calculateMoney();
 
const car = new Vehicle();
car.x = 3;
car.y = 1;
car.speed = 5;

console.log(car.x); //prints 3
console.log(car.y); //prints 1
console.log(car.speed); //prints 5
 */
class Vehicle {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this._speed = speed;
  }

  set speed(speed) {
    if (speed < 0) {
      return console.log("Speed must be positive");
    }
    this._speed = speed;
  }
  get speed() {
    return this._speed;
  }
}
const c = new Vehicle();
c.x = 3;
c.y = 1;
c.speed = -2; // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed); // prints undefined
c.speed = 10;
console.log(c.speed);
