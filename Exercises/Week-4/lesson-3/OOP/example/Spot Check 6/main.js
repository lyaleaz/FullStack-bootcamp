class Vehicle {
  constructor(x, y, speed, fuel) {
    this.x = x;
    this.y = y;
    this._speed = speed;
    this._fuel = fuel;
  }

  get fuel() {
    return this._fuel;
  }

  set fuel(amount) {
    if (amount > 150) {
      return console.log("Too much");
    }
    if (amount < 0) {
      return console.log("Not reasonable");
    }
    this._fuel = amount;
  }
}
