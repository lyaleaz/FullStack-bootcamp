import React from "react";

const Solution = () => {
  const wordHint = "Hangman";
  const emptySpaces = Array(wordHint.length).fill("_").join(" ");

  return (
    <div>
      <p>{emptySpaces}</p>
      <p>Hint: {wordHint}</p>
    </div>
  );
};

export default Solution;
