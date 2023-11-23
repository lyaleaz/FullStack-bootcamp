let users = [];

const getData = function () {
  setTimeout(function () {
    users = [{ name: "Rick" }, { name: "Morty" }];
    console.log("Got users");
  }, 3000);
};

const displayData = function () {
  console.log("Going to display: " + users);
  for (user of users) {
    console.log(user.name);
  }
};
const doSomething = function () {
  console.log("something");
};
/*
setInterval( function () {
  console.log( new Date () )
}, 1000)
*/
const greet = (name) => {
  console.log("Hello there, " + name);
};
//7. Spot Check 4
const square = (number) => {
  const result = number * number;
  console.log(result);
};

// Example usage:
square(4); // Should print 16
/*
const add = (x, y) => {
  return x + y
}

const sum = add(1, 2) 
console.log(sum) //prints 3
*/
const add = (x, y) => x + y;

const sum = add(1, 2);
console.log(sum); //prints 3
const getHypotenuse = (a, b) => {
  const aSquared = a * a;
  const bSquared = b * b;
  const cSquared = aSquared + bSquared;
  return Math.sqrt(cSquared);
};

const hypoteneuese = getHypotenuse(3, 4);
console.log(hypoteneuese); //prints 5

const getFormalTitle = (title, name) => title + " " + name;
greet("Jolene"); //prints "Hello there, Jolene"
setTimeout(doSomething, 3000); //will invoke doSomething in 3 seconds

getData();
displayData();
