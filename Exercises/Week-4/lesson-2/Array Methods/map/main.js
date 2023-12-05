let poundWeights = [142, 180, 178, 121, 132];

let kiloWeights = poundWeights.map((pw) => Math.round(pw / 2.2));
console.log(kiloWeights); //prints [65, 82, 81, 55, 60]

let messagesFromDad = [
  "HI HONEY",
  "HOW WAS SCHOOL??",
  "DID YOU EAT TODAY?",
  "I CAN'T FIND THE REMOTE CONTROL",
];
let calmMessages = messagesFromDad.map((m) => m.toLowerCase());
let users = [
  {
    name: "Leanne Graham",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: { lat: "-37.3159", lng: "81.1496" },
    },
  },
  {
    name: "Ervin Howell",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: { lat: "-43.9509", lng: "-34.4618" },
    },
  },
];
console.log(
  users.map((u) => {
    return { name: u.name, city: u.address.city };
  })
);
