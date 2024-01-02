/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("mongoose-practice");
db.books.find({ pages: { $gt: 200, $lt: 500 } });
//db.people.find({});
/* Book.find();
//2. Find books whose rating is less than 5, and sort by the author's name
Book.find({ rating: { $lt: 5 } }).sort({ author: 1 });
//3. Find all the Fiction books, skip the first 2, and display only 3 of them
Book.find({ genres: "Fiction" }).skip(2).limit(3); */
db.people.find({
  $and: [{ "kids.weight": { $gt: 70 } }, { weight: { $gt: 100 } }],
});
