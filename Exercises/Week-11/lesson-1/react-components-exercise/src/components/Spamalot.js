import Spam from "./Spam";
import React from "react";

const Spamalot = () => {
  const spamItems = Array.from({ length: 500 }, (_, index) => (
    <Spam key={index} />
  ));

  return <div id="ex-2">{spamItems}</div>;
};

export default Spamalot;
