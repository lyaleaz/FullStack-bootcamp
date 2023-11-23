
//ex1
const greet = function(name){
  console.log("Hello there, " + name)
}
greet("lyale")
//ex2
const multiply = function(x, y = 2){
  console.log(x * y)
}

multiply(3, 4) // prints 12
multiply(3) // prints 6

//ex3
const changeArray = function(arr){
  let innerArray = arr
  innerArray[0] = 50
}

const numbers = [1, 2, 3]

changeArray(numbers)
console.log(numbers) // prints [50, 2, 3]

//ex4
const add = function(x, y){
  return x + y
}

const sum = add(1, 2)
console.log(sum) // prints 3

//ex5
const meow = function(){
    console.log("Meow")
}

const woof = function(){
    console.log("woof")
}


const getAnimalSoundFunc = function(animal){
    if(animal=="cat"){
            return meow
        }
    if(animal=="dog"){
            return woof
    }
}

getAnimalSoundFunc("cat")() //will print meow

//ex6
function newgreet(){
  console.log("Hello there, from the wild, wild West")
}
newgreet()

//ex7
newgreet() //works without a problem e


const greetExpression = function(){
  console.log("Uh oh")
}
greetExpression() //throws an error

//ex8
const person = {
  name: "Julius",
  speak: function(food) {
    console.log("I like cheese toast")
  }
}
console.log(person.name) //you know what this will do

person.speak() //and this? Try it out!

person.speak("cheese toast")



//Q1
function IsEven(number)
{
    if(number%2==0)
    {
      
        return true
    }
    else{
      
        return false
    }
}
console.log(IsEven(10))
console.log(IsEven(5))
//2
function EvenArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!IsEven(arr[i])) {
            console.log(arr[i] + ",");
        }
    }
}
const numbersArr=[1,2,3,4,5,6];
EvenArray(numbersArr)
//3
function checkExists(numbers,num)
{
    for (let i=0;i<numbers.length;i++)
    {
        if(num==numbers[i])
        {
            return true
        }
    }
    return false
}
console.log(checkExists([1, 2, 3], 2))
console.log(checkExists([1, 2, 3], 5))

//4
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  }
};
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

//5
const increaseByNameLength = (money, name) => money + name.length*100;

const makeRegal = (name) => "His Royal Highness " +name;


const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

