import React, { useState } from "react";

const InputTest = () => {
  const [inputValue, setInputValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);

  const updateText = (event) => {
    setInputValue(event.value);
  };

  const handleCheckboxChange = (event) => {
    setCheckboxValue(event.target.checked);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={updateText} />
      <input
        type="checkbox"
        checked={checkboxValue}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default InputTest;
