let posts = [
  {
    id: 0,
    text: "I'm not here",
    comments: [{ id: 0, text: "support that" }],
  },
  {
    id: 1,
    text: "Find me",
    comments: [
      { id: 0, text: "here I am" },
      { id: 1, text: "rock you like a hurricane" },
      { id: 2, text: "dum dum" },
    ],
  },
  {
    id: 2,
    text: "Where's waldo anyway",
    comments: [
      { id: 0, text: "who's waldo" },
      { id: 1, text: "he's called Effi" },
    ],
  },
  {
    id: 3,
    text: "Poof",
    comments: [{ id: 0, text: "like magic" }],
  },
];
const findById = function (id) {
  for (let post of posts) {
    if (post.id == id) {
      return post;
    }
  }
};
console.log(findById(0));
const findById1 = (id) => posts.find((p) => p.id === id);
console.log(findById1(1)); // prints {id: 1, text: "Find me", comments: Array(3)}

const findCommentById = (postID, commentID) => {
  let post = findById(postID);
  return post.comments.find((c) => c.id == commentID);
};
console.log(findCommentById(1, 0));

//some & every
let ages = [31, 28, 23, 27, 25, 16, 24];
console.log(ages.every((a) => a > 18)); //returns false

let menu = [
  { name: "Beef stew", vegetarian: false },
  { name: "Beef sandwhich", vegetarian: false },
  { name: "Carrot on a stick", vegetarian: true },
  { name: "Beef eggroll", vegetarian: false },
];

menu.some((m) => m.vegetarian); //returns true
//Spot check
let movies = [
  { title: "Dareangel", studio: "Marvel", year: 2023 },
  { title: "Batterfly", studio: "Fox", year: 2021 },
  { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
  { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
];
if (movies.some((m) => m.studio === "Marvel")) {
  console.log("Let's go watch some movies");
} else {
  console.log("Let's stay home");
}

if (movies.every((m) => m.year > 2020)) {
  console.log("Futuristic stuff");
} else {
  console.log("Yawn");
}
