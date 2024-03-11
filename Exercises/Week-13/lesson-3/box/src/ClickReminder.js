import React from "react";
import { useState, useEffect } from "react";

function ClickReminder() {
  const [timeoutId, setTimeoutId] = useState(null);

  const clickHandler = () => {
    console.log("clearing timeout");
    clearTimeout(timeoutId);
  };

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      alert("remember to click");
    }, 2000);
    setTimeoutId(timeoutId);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}
export default ClickReminder;
