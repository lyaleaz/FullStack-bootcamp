const enemies = [{ e: "Plastic" }, { e: "Cigarettes" }, { e: "The Man" }];

for (let enemy in enemies) {
  console.log(enemy.e);
}
console.log("hi");
const title = "Circle Utility";
const pi = 3.14159;

const calcCircleArea = function (radius) {
  return pi * radius * radius;
};

/* module.exports.pi = pi;
module.exports.calcCircleArea = calcCircleArea; */
const circleUtilities = require("./circleUtils");
console.log(circleUtilities);
