import React, { useState } from "react";

import Hot from "./component/Hot";
import Cold from "./component/Cold";
/* import Company from "./component/Company";
import Register from "./component/Register";
import Calendar from "./component/Calendar";

const App = () => {
  const [reservations, setReservations] = useState([
    { day: "Monday", time: 2000, name: "Earl" },
    { day: "Monday", time: 1845, name: "Ella" },
    { day: "Tuesday", time: 1930, name: "Linda" },
    { day: "Wednesday", time: 2015, name: "Anni" },
  ]);

  return (
    <div>
      <Company name="Your Company" revenue={1000} />
      <Calendar reservations={reservations} />
      <Register reservations={reservations} setReservations={setReservations} />
    </div>
  );
};
 */
/* function App() {
  const [temperature, setTemperature] = useState("hot");
  const toggleTemperature = () => {
    setTemperature(temperature === "hot" ? "cold" : "hot");
  };
  return (
    <div className="App">
      {temperature === "hot" ? <Hot /> : <Cold />}
      <button onClick={toggleTemperature}>Change Temp!</button>
    </div>
  );
} */
/* function Counter() {
  const [count, setCount] = useState(0);

  const updateCounter = () => {
    setCount(count + 1);
  };
  console.log(count);

  return (
    <div>
      <button onClick={updateCounter}>+</button>
      <div>{count}</div>
    </div>
  );
} */
function App() {
  const [likes, setLikes] = useState(0);
  const increaseLike = () => {
    setLikes(likes + 1);
  };
  return (
    <div className="App">
      <div>{likes}</div>
      <button onClick={increaseLike}>Like! 👍</button>
    </div>
  );
}

export default App;
