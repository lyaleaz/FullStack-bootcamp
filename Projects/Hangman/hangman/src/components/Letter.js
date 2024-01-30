import React from "react";

const Letter = ({ value, selected, onLetterSelect }) => {
  const handleLetterClick = () => {
    onLetterSelect();
  };

  return (
    <button
      onClick={handleLetterClick}
      className={selected ? "selected" : ""}
      disabled={selected}
    >
      {value}
    </button>
  );
};

export default Letter;
