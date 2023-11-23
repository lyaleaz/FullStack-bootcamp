const getTime = function (callback) {
  const currentTime = new Date();
  callback(currentTime);
};

const returnTime = function (time) {
  console.log("The current time is: " + time);
};

getTime(returnTime);
/*
//Exercise 3 - Callbacks
const logData = function (data) {
  console.log(data);
};
getTime(returnTime);
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

displayData(alert, logData, "I like to party");
*/
//arrow function
const sum = (a, b, c) => a + b + c;
console.log(1, 2, 3);
//Exercise 5 - Arrow Functions

const capitalize = (str) => console.log(`${str}`);

capitalize("bOb"); // returns Bob
capitalize("TAYLOR"); // returns Taylor
capitalize("feliSHIA"); // returns Felishia

//Exercise 6 - Arrow functions
const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};

const commentOnWeather = (temp) =>
  console.log(`It's ${determineWeather(temp)}`);
commentOnWeather(30); //returns "It's hot"
commentOnWeather(22); //returns "It's cold"
/*
//Exercise 7
const explode = (lightFunc, soundFunc, sound) => {
  lightFunc();
  soundFunc(sound);
};

const shineLight = () =>
  (document.getElementById("box").style.backgroundColor = "yellow");

const makeSound = (sound) => alert(sound);

explode(shineLight, makeSound, "BOOM");*/
let x = {
  count: 12,
  go: () => {
    setTimeout(function () {
      console.log(this.count);
    }, 1500);
  },
};
x.go();

const run = (name) => {
  console.log("Run, " + name + ", run!");
};
const yell = function (action) {
  let env = "Forest";
  action(env);
};
run(yell);
