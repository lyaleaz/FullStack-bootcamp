const WordRandom = function (data) {
  const word = data[Math.floor(Math.random() * data.length)];
  console.log("the word: " + word);
  return word;
};

const PromiseWord = $.get("https://random-word-api.herokuapp.com/all");
PromiseWord.then(WordRandom).then((randomWord) => {
  const APIPromise = $.get(
    "https://www.googleapis.com/books/v1/volumes?q=intitle:" + randomWord
  );
  APIPromise.then(callback);
});

const callback = function (data) {
  let iBook = Math.floor(Math.random() * data.items.length);
  console.log("the title: ", data.items[iBook].volumeInfo.title);
};
