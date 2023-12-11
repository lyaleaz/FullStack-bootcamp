const getRandomWord = function () {
  let words = [
    "Bonanza",
    "Elusive",
    "Hindrance",
    "Astute",
    "Polaroid",
    "Phonic",
    "Yonder",
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(words[Math.floor(Math.random() * words.length)]);
    }, 1000);
  });
};

const getSynonyms = function (word) {
  let thesauraus = {
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(thesauraus[word]);
    }, 1000);
  });
};

const getSentiment = function (word) {
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(wordSentiment[word]);
    }, 1000);
  });
};

// No need for promises here
const getSentimentDescription = function (sentiment) {
  return sentiment === 1
    ? "Positive"
    : sentiment === -1
    ? "Negative"
    : "Neutral";
};
function getData() {
  return new Promise((resolve, reject) => {
    fetch("https://example.com/data")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed");
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
getRandomWord()
  .then((word) => {
    return getSynonyms(word);
  })
  .catch((error) => console.log(error))
  .then((synonyms) => {
    console.log(synonyms);
  })
  .catch((error) => console.log(error));

class APIManager {
  fetch() {
    return $.get("/data");
  }
}

class Renderer {
  render(dataPromise) {
    dataPromise.then(function (data) {
      $("#body").append(`<div>${data}</div>`);
    });
  }
}

const apiManager = new APIManager();
const renderer = new Renderer();

let initialDataPromise = apiManager.fetch();
renderer.render(initialDataPromise); //initial page load

$(".some-thing").on("click", function () {
  let newDataPromise = apiManager.fetch();
  renderer.render(newDataPromise);
});
