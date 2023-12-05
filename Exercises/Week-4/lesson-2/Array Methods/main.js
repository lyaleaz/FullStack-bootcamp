const restaurants = [
  { name: "Touch of Food", rating: 2, location: "Hogsmeade", certified: false },
  {
    name: "Le Cuisine de Quoi",
    rating: 5,
    location: "Ankh Morpork",
    certified: true,
  },
];

const best = [];
for (let resto of restaurants) {
  if (resto.rating == 5) {
    best.push(resto);
  }
}
//console.log(best);

//filter
const res = restaurants.filter((r) => r.rating === 5);
console.log(res);

//foeEach
restaurants.forEach((r) =>
  console.log(`the restaurants called ${r.name} is in ${r.location}`)
);

//map
const restName = restaurants.map((r) => r.name + " - " + r.location);
console.log(restName);

//find
const greatResto = restaurants.find((r) => r.rating == 5);
console.log(greatResto);

//some
console.log(restaurants.some((r) => r.certified));

//every
console.log(restaurants.every((r) => r.certified));
//chaining

const myRestos = restaurants
  .filter((r) => r.certified)
  .map((r) => `${r.name}-${r.location}`);
console.log(myRestos);
