const findBookAndPrint = function (bookName) {
  let letter = bookName[0];
  let booksStartingWithLetter = books[letter];

  booksStartingWithLetter.forEach((b) => console.log(b.title));

  for (let book of booksStartingWithLetter) {
    if (book.title == bookName) {
      return book;
    }
  }
};
const books = {
  A: [
    { title: "Alchemist", author: "Pablo" },
    { title: "Asmiov's Tales", author: "Issac Asimov" },
    { title: "Analysis of Apes", author: "Jane Goodall" },
  ],
  B: [
    { title: "Best of Meryl Streep Scripts", author: "Madamme Streep" },
    { title: "Boyhood, a Story", author: "Childish Gambino" },
  ],
  //...,
  N: [
    { title: "Name of the Wind", author: "Patrick Rothfuss" },
    { title: "Nostradamus: Revelations", author: "Dalinar Kholin" },
  ],
  //etc
};
