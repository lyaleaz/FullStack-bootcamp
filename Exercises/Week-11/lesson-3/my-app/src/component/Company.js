import React from "react";

function Company({ name, revenue }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>Revenue: {revenue}</p>
    </div>
  );
}

export default Company;
