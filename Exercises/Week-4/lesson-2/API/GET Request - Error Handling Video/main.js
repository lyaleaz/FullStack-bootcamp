/* const displayBookName = function (data) {
  console.log("Request complete, received data");
  const title = data.items[0].volumeInfo.title;
  const author = data.items[0].volumeInfo.authors[0];
  $("body").append(`
  <div>
  <h1>My Awesome</h1>
  <p>${author}</p>
  <p>${title}</p>
  </div>`);
  //GET request
}; */
/* $.get(
  "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
  displayBookName
); */
//Error Handling
/* $.ajax({
  method: "GET",
  url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
  success: displayBookName,
  error: function (xhr, text, error) {
    alert("Woops,seems to be an issue with the request. ");
  },
}); */

/* const useData = function (data) {
  console.log(data);
};

$.ajax({
  method: "GET",
  url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
  success: useData,
}); */

const fetch = function () {
  $.ajax({
    method: "GET",
    url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
    success: function (data) {
      console.log(data);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};
