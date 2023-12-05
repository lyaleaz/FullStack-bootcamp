let vegetables = [
  { name: "Eggplant", color: "purple" },
  { name: "Carrot", color: "orange" },
  { name: "Squash", color: "orange" },
  { name: "Tomatoe", color: "red" },
  { name: "Onion", color: "white" },
  { name: "Sweet Potato", color: "orange" },
];
let orangeVegetables = vegetables.filter((v) => v.color === "orange");
console.log(orangeVegetables);
