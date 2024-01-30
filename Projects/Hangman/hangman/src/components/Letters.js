import React from "react";
import Letter from "./Letter";
const Letters = ({ letterStatus, onLetterSelect }) => {
  const alphabet = Object.keys(letterStatus);

  return (
    <div>
      {alphabet.map((letter) => (
        <Letter
          key={letter}
          value={letter}
          selected={letterStatus[letter]}
          onLetterSelect={() => onLetterSelect(letter)}
        />
      ))}
    </div>
  );
};

export default Letters;
