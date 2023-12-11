let word = null;

getRandomWord()
  .then((wordParam) => {
    word = wordParam;
    let synonymsPromise = getSynonyms(word);
    let sentimentPromise = getSentiment(word);
    return Promise.all([synonymsPromise, sentimentPromise]);
  })
  .then((promiseResults) => {
    // The first item in the array is our synonyms array, and the second is the sentiment for the word we got.
    let [synonyms, sentiment] = promiseResults;
    const sentimentDescription = getSentimentDescription(sentiment);
    console.log(
      `The word ${word} has a ${sentimentDescription} sentiment and synonyms ${synonyms}`
    );
  });
