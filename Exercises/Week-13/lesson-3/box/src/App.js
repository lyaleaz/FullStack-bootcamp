import { useState, useEffect } from "react";
import getColors from "./colorService";
import ClickReminder from "./ClickReminder";
function App() {
  const [shouldRemove, setShouldRemove] = useState(false);

  const clickHandler = () => {
    setShouldRemove(true);
  };

  return (
    <div>
      <button onClick={clickHandler}>Remove</button>
      {shouldRemove ? null : <ClickReminder />}
    </div>
  );
}
/* function App() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [titles, setTitles] = useState([]);

  const updateTitle = () => {
    setTitleIndex(titleIndex + 1);
  };

  useEffect(() => {
    const getData = async function () {
      let colors = await getColors();
      setTitles(colors);
    };
    getData();
  }, []);

  useEffect(() => {
    setTimeout(updateTitle, 1000);
  }, [titleIndex]);

  return (
    <div>
      <div className="box">{titles[titleIndex]}</div>
    </div>
  );
} */
/*
function App() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [size, setSize] = useState(100);

  const updateTitle = () => {
    console.log("update index", titleIndex + 1);
    setTitleIndex(titleIndex + 1);
  };

  const updateSize = () => {
    setSize(size + 20);
  };

  useEffect(() => {
    setTimeout(updateTitle, 1000);
  }, [titleIndex]);

  return (
    <div>
      <button onClick={updateSize}>Change Size</button>
      <div
        className="box"
        style={{ width: size, height: size, backgroundColor: "red" }}
      >
        {titleIndex}
      </div>
    </div>
  );
}  */
export default App;
