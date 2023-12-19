function checkPrice() {
  const itemName = document.getElementById("itemName").value;

  fetch(`http://localhost:3000/priceCheck/${itemName}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("priceDisplay").innerText = `Price: ${
        data.price || "Item not found"
      }`;
    })
    .catch((error) => console.error("Error:", error));
}
function buyItem() {
  const itemName = document.getElementById("buyItem").value;
  fetch(`http://localhost:3000/buy/${itemName}`)
    .then((response) => response.json())
    .then((data) => {
      const message = data.error
        ? `Error: ${data.error}`
        : `Congratulations, yo have just bought ${data.name} for ${data.price}. There are ${data.inventory} left now in the store.`;

      document.getElementById("buyMessage").innerText = message;
    })
    .catch((error) => console.error("Error:", error));
}
