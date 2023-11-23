const doSomething = function(){
  console.log("something")
}

setTimeout(doSomething, 3000) //will invoke doSomething in 3 seconds
/*
//5. Spot Check 3
const timer = function(){
  console.log(new Date())

}

setInterval(timer, 1000)
//without the variable

setInterval(function() {
  console.log(new Date());
}, 1000);*/

//6. Arrow Functions
const greet = (name) => {
  console.log("Hello there, " + name)
}

greet("Jolene") 

const greet1 = (name) => console.log("Hello there, " + name)

greet1("Jolene") 

//7. Spot Check 4
const square = (number) => {
  console.log(number * number);
};

// Example usage:
square(4); // Should print 16

//8. Arrow Functions II
const add = (x, y) => x + y

const sum = add(1, 2) 
console.log(sum) //prints 3

const getHypotenuse = (a, b) => {
  const aSquared = a * a
  const bSquared = b * b
  const cSquared = aSquared + bSquared
  return Math.sqrt(cSquared)
}

const hypoteneuese = getHypotenuse(3, 4) 
console.log(hypoteneuese ) //prints 5