import React from "react";

export default function Item({ item, price, shouldDiscount }) {
  const calculatePrice = () => {
    if (shouldDiscount) {
      return price * (1 - item.discount);
    } else {
      return price;
    }
  };
  return (
    <div>
      Item: {item} his price: ${price} -${calculatePrice()}
    </div>
  );
}
