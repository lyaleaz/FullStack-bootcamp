import React from "react";
import Letter from "./Letter";

const Solution = ({ letterStatus, wordHint, hint }) => {
  return (
    <div>
      <br></br>
      {wordHint.split("").map((letter, index) => (
        <Letter
          key={index}
          value={letter}
          selected={letterStatus[letter]}
          onLetterSelect={() => {}}
        />
      ))}
      <p>Hint: {hint}</p>
    </div>
  );
};

export default Solution;
