const fetch = function (queryType, queryValue) {
  const encodedQueryValue = encodeURIComponent(queryValue);
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${encodedQueryValue}`;

  $.ajax({
    method: "GET",
    url: apiUrl,
    success: function (data) {
      console.log(data);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};

fetch("aaaaa", 9780575087057);
/* fetch(9782806269171);
fetch(1440633908);
fetch(9781945048470);
fetch(9780307417138); */
