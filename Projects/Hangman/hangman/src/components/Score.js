import React, { useState } from "react";
import "../App.css";

const Score = ({ score, remainingGuesses }) => {
  const [scoreClass, setScoreClass] = useState("");
  const Guesses = 5;

  const scoreColor = score >= 80 ? "green" : score >= 50 ? "orange" : "red";

  return (
    <div className={`score-container ${scoreClass}`}>
      <p>the score is</p>
      <p className="score" style={{ color: scoreColor }}>
        {score}
      </p>
      <p>
        <br />
        Remaining guesses: {remainingGuesses}
      </p>
    </div>
  );
};

export default Score;
