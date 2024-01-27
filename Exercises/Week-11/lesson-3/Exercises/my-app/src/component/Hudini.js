import React, { useState } from "react";

const Hudini = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show ? "Now you see me" : "Now you don’t"}
      <div></div>
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
};

export default Hudini;
