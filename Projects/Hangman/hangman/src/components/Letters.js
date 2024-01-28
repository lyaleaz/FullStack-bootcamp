import React from "react";
import Letter from "./Letter";

const Letters = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div>
      {alphabet.split("").map((letter) => (
        <Letter key={letter} value={letter} />
      ))}
    </div>
  );
};

export default Letters;
