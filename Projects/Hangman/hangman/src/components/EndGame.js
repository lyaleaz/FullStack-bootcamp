import React from "react";

const EndGame = ({ guessed, secretWord, score }) => {
  return (
    <div className="end-game">
      {guessed ? (
        <p>Congratulations! You guessed the word! Final Score: {score}</p>
      ) : (
        <p>Game over! The secret word was: {secretWord}</p>
      )}
    </div>
  );
};
export default EndGame;
