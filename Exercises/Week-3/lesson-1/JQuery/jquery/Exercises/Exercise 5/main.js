const fruits = [
  { name: "Orange", color: "orange" },
  { name: "Banana", color: "yellow" },
  { name: "Coconut", color: "brown" },
  { name: "Kiwi", color: "brown" },
  { name: "Lemon", color: "yellow" },
  { name: "Cucumber", color: "green" },
  { name: "Persimmon", color: "orange" },
  { name: "Pumpkin", color: "orange" },
];
const basketElement = document.getElementById("basket");

for (const fruit of fruits) {
  const fruitDiv = document.createElement("div");
  fruitDiv.textContent = fruit.name;

  fruitDiv.classList.add(fruit.color);

  basketElement.appendChild(fruitDiv);
}
