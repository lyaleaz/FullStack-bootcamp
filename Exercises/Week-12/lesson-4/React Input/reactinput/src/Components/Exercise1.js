import React, { useState } from "react";

const Exercise1 = () => {
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleChange = (event, property) => {
    setPerson({ ...person, [property]: event.target.value });
  };
  const handleButtonClick = () => {
    const Message = `Come in ${person.name}, you're ${person.age} - that's good enough`;

    alert(Message);
  };
  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => handleChange(e, "name")}
        value={person.name}
        placeholder="Enter your name"
      />
      <input
        id="age-input"
        onChange={(e) => handleChange(e, "age")}
        value={person.age}
        placeholder="Enter your age"
      />
      <button onClick={handleButtonClick}>Go to Bar</button>
    </div>
  );
};
export default Exercise1;
