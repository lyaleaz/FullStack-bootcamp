/* const length1 = function () {
  $.ajax({
    method: "GET",
    people: "https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people",
    success: function (data) {
      const people = data.people;
      console.log(`Number of people: ${people.length}`);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};
 */
function fetchData(apiUrl, callback) {
  $.get(apiUrl, function (data, status) {
    if (status === "success") {
      callback(data);
    } else {
      console.error(`Error fetching data from ${apiUrl}`);
    }
  });
}

const peopleApiUrl = "https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people";
const petsApiUrl = "https://ele-people-api-8eb0b1bd9b96.herokuapp.com/pets";
fetchData(peopleApiUrl, function (peopleData) {
  const rebeccaParker = peopleData[0];

  if (
    rebeccaParker &&
    rebeccaParker.family &&
    rebeccaParker.family.pets &&
    rebeccaParker.family.pets.length > 0
  ) {
    const firstPetName = rebeccaParker.family.pets[0].name;
    const isNeutered = rebeccaParker.family.pets[0].neutered ? "Yes" : "No";

    console.log(`Rebecca Parker's first pet in the Pets API: ${firstPetName}`);
    console.log(`Is the pet Neutered? ${isNeutered}`);
  } else {
    console.error("Invalid or missing data for Rebecca Parker or her pets");
  }
});
