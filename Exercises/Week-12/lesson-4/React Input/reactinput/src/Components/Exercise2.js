import { useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");
  const handleSelectChange = (event) => {
    const selectedFruit = event.target.value;
    setFruit(selectedFruit);
    setName((prevName) => {
      console.log(`${prevName} selected ${selectedFruit}`);
      return prevName;
    });
  };

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <select id="select-input" onChange={handleSelectChange} value={fruit}>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
    </div>
  );
};
export default Exercise2;
