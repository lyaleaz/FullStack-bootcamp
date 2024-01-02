let b1 = new Book({
  title: "Name of the Wind",
  author: "Patrick Rothfuss",
  reviews: [],
});

let c1 = new Critic({
  name: "William Jeffery",
  reviews: [],
});

let r1 = new Review({
  book: b1,
  critic: c1,
  reviewText: "Excellent Book",
});
b1.reviews.push(r1);
c1.reviews.push(r1);

b1.save();
c1.save();
r1.save();
Book.find({}, function (err, books) {
  console.log(books);
});
