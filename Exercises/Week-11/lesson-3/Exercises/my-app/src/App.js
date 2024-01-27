import "./App.css";
import Hudini from "./component/Hudini";
import Landing from "./component/Landing";
import Home from "./component/Home";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      {
        item: "Surround Sound Pelican",
        price: 3099,
        discount: 0.05,
        hottest: true,
      },
    ],
    shouldDiscount: false,
    currentPage: "Landing",
  });

  const switchPage = (page) => {
    setState({ ...state, currentPage: page });
  };

  return (
    <div className="App">
      <Hudini />
      <button onClick={() => switchPage("Landing")}>Go to Landing</button>
      <button onClick={() => switchPage("Home")}>Go to Home</button>
      {state.currentPage === "Landing" ? (
        <Landing data={state} />
      ) : (
        <Home store={state.store} />
      )}
    </div>
  );
}

export default App;
