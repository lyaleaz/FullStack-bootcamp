import React, { useState, useEffect } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  });
  return (
    <div>
      <p>Time is: {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Time;
