document.addEventListener("DOMContentLoaded", function () {
  fetch("animal.json")
    .then((response) => response.json())
    .then((data) => {
      const animalInfoElement = document.getElementById("animal-info");

      data.animals.forEach((animal) => {
        const animalDiv = document.createElement("div");
        animalDiv.innerHTML = `
          <h2>${animal.name}</h2>
          <p>Weight: ${animal.weight.kilograms} kilograms (${
          animal.weight.tons
        } tons)</p>
          <p>Habitat: ${animal.habitat}</p>
          <p>Endangered: ${animal.endangered ? "Yes" : "No"}</p>
          <p>Foods: ${animal.foods.join(", ")}</p>
          <p>Predators: ${animal.predators.join(", ")}</p>
          <p>Deliciousness: ${animal.deliciousness}/5</p>
          <hr>
        `;
        animalInfoElement.appendChild(animalDiv);
      });
    })
    .catch((error) => console.error("Error fetching JSON:", error));
});
