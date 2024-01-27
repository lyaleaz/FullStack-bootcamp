import React, { useState } from "react";

const SpotCheck1 = () => {
  const logHover = () => {
    console.log("I was hovered!");
  };

  return <button onMouseEnter={logHover}>Click me</button>;
};

function Example() {
  const pageState = useState(1);

  const pageNumber = pageState[0];
  const setPageNumber = pageState[1];

  const addPage = () => setPageNumber(pageNumber + 1);

  return (
    <div>
      <p>You are on page number {pageNumber}</p>
      <button onClick={addPage}>Next page</button>
    </div>
  );
}
export { SpotCheck1, Example };
