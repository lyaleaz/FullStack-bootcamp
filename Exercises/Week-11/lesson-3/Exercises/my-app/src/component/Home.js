import React from "react";
import Item from "./Item";

const Home = ({ store }) => {
  return (
    <div>
      {store.map((item, index) => (
        <Item key={index} item={item.item} price={item.price} />
      ))}
    </div>
  );
};

export default Home;
