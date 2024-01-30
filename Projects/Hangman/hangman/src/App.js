import React, { useState } from "react";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import EndGame from "./components/EndGame";
import "./App.css";

const App = () => {
  const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());
  const [solution, setSolution] = useState({
    word: "APPLE",
    hint: "A fruit",
    hintDisplay: "_____",
  });
  const [score, setScore] = useState(100);
  const [incorrectAttempts, setIncorrectAttempts] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [guessed, setGuessed] = useState(false);
  const [remainingGuesses, setRemainingGuesses] = useState(5);

  function generateLetterStatuses() {
    const letterStatus = {};
    for (let i = 65; i <= 90; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  const handleLetterSelect = (selectedLetter) => {
    if (letterStatus[selectedLetter]) {
      return;
    }

    const newLetterStatus = {
      ...letterStatus,
      [selectedLetter]: true,
    };

    if (solution.word.includes(selectedLetter)) {
      const newHintDisplay = solution.hintDisplay
        .split("")
        .map((letter, index) => {
          if (letter === "_" && solution.word[index] === selectedLetter) {
            setScore(score + 5);
            setLetterStatus(newLetterStatus);
            return selectedLetter;
          } else {
            return letter;
          }
        })
        .join("");
      setSolution({
        ...solution,
        hintDisplay: newHintDisplay,
      });
    } else {
      setIncorrectAttempts((prevAttempts) => prevAttempts + 1);
      setScore((prevScore) => Math.max(0, prevScore - 20));
      setRemainingGuesses(remainingGuesses - 1);
    }

    if (solution.word.split("").every((letter) => newLetterStatus[letter])) {
      setEndGame(true);
      setGuessed(true);
    } else if (remainingGuesses === 0) {
      setEndGame(true);
      setGuessed(false);
    }
  };

  const resetGame = () => {
    window.location.reload();
  };

  return (
    <div className="app-container">
      <Score score={score} remainingGuesses={remainingGuesses} />
      <Letters
        letterStatus={letterStatus}
        onLetterSelect={handleLetterSelect}
      />
      <Solution
        letterStatus={letterStatus}
        wordHint={solution.hintDisplay}
        hint={solution.hint}
      />
      {endGame && (
        <EndGame guessed={guessed} secretWord={solution.word} score={score} />
      )}
      <button onClick={resetGame}>Restart Game</button>{" "}
    </div>
  );
};

export default App;
