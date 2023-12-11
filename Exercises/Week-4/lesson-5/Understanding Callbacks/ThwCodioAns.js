const getRandomWord = function (callback) {
  let words = [
    "Bonanza",
    "Elusive",
    "Hindrance",
    "Astute",
    "Polaroid",
    "Phonic",
    "Yonder",
  ];
  setTimeout(() => {
    callback(words[Math.floor(Math.random() * words.length)]);
  }, 1000);
};

const getSynonyms = function (word, callback) {
  let thesaurus = {
    Absolute: ["Definitive", "Certain", "Sure", "Unequivocal"],
    Astute: ["Sharp", "Poignant", "Clever"],
    Azure: ["Blue", "Cyan", "Sky-blue"],
    Bright: ["Luminous", "Brilliant"],
    Bonanza: ["Plethora", "Smorgasboard", "Copious", "Plenty"],
    Elusive: ["Slick", "Slippery", "Ethereal", "Loose"],
    Erode: ["Destroy", "Wear out", "Tarnish"],
    Hindrance: ["Bother", "Disturbance", "Problematic"],
    Phonic: ["Soundful"],
    Ploy: ["Plan", "Ruse"],
    Polaroid: ["Photograph"],
    Yap: ["Bark", "Blab", "Chatter"],
    Yonder: ["There", "Away", "Far", "Afar"],
  };

  setTimeout(() => {
    callback(thesaurus[word]);
  }, 1000);
};

const getSentiment = function (word, callback) {
  let wordSentiment = {
    Definitive: 1,
    Sharp: 1,
    Blue: 0,
    Luminous: 1,
    Plethora: 1,
    Slick: -1,
    Destroy: -1,
    Bother: -1,
    Soundful: 0,
    Plan: 0,
    Photograph: 0,
    Bark: -1,
    There: -1,
  };

  setTimeout(() => {
    callback(JSON.stringify(wordSentiment[word]));
  }, 1000);
};

const getSentimentDescription = function (sentiment) {
  return sentiment === "1"
    ? "Positive"
    : sentiment === "-1"
    ? "Negative"
    : "Neutral";
};

/* getRandomWord((randomWord) => {
  console.log(`Random Word: ${randomWord}`);

  getSynonyms(randomWord, (synonyms) => {
    if (!synonyms) {
      console.log("No synonyms found.");
      return;
    }

    console.log(`Synonyms of ${randomWord}:`, synonyms);
    let synonym = synonyms[0]; // Use the first synonym

    getSentiment(synonym, (sentiment) => {
      let sentimentDescription = getSentimentDescription(sentiment);
      console.log(
        `Sentiment of "${synonym}" (Synonym of ${randomWord}): ${sentimentDescription}`
      );
    });
  });
}); */
//handle errors

getRandomWord(function (word) {
  getSynonyms(
    word,
    function (synonyms) {
      getSentiment(
        synonyms[0],
        function (sentiment) {
          console.log(`The word ${word} has a synonym ${
            synonyms[0]
          } which has a 
            ${getSentimentDescription(sentiment)} sentiment`);
        },
        function (error) {
          console.log(error);
        }
      );
    },
    function (error) {
      console.log(error);
    }
  );
});
