let vegetables = [
  { name: "Eggplant", color: "purple" },
  { name: "Carrot", color: "orange" },
  { name: "Squash", color: "orange" },
  { name: "Tomatoe", color: "red" },
  { name: "Onion", color: "white" },
  { name: "Sweet Potato", color: "orange" },
];

let people = [
  { salary: 1300, goodPerformance: false },
  { salary: 1500, goodPerformance: true },
  { salary: 1200, goodPerformance: true },
  { salary: 1700, goodPerformance: false },
  { salary: 1600, goodPerformance: true },
];

let orangeVegetables = vegetables.filter((v) => v.color === "orange");
console.log(orangeVegetables);
/* for (let vegetable of orangeVegetables) {
  console.log(vegetable.name); //expect to see Carrot, Squash, and Sweet Potato
} */
console.log("orangeVegetables: ");
orangeVegetables.forEach((ov) => console.log(ov.name));

people.forEach((p) => console.log("people: " + p.salary)); //should print 1300, 1800, 1500, 1700, 1900 (on separate lines)
const updateSalary = function (person) {
  if (person.goodPerformance) {
    person.salary += 300;
  }
};

people.forEach(updateSalary); //using the named function!
