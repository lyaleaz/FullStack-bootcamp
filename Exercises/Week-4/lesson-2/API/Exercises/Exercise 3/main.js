const fetch = function (queryType, queryValue) {
  const encodedQueryValue = encodeURIComponent(queryValue);
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${encodedQueryValue}`;

  $.ajax({
    method: "GET",
    url: apiUrl,
    success: function (data) {
      if (data.items && data.items.length > 0) {
        data.items.forEach(function (book) {
          const title = book.volumeInfo.title;
          const authors = book.volumeInfo.authors
            ? book.volumeInfo.authors.join(", ")
            : "Unknown Author";
          const ISbn = book.volumeInfo.industryIdentifiers
            ? book.volumeInfo.industryIdentifiers[0].identifier
            : "Unknown ISBN";

          console.log(
            `Title: ${title}\nAuthor(s): ${authors}\nISBN: ${ISbn}\n`
          );
        });
      } else {
        console.log("No books found");
      }
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};

fetch("ISBN_13", 9780439023528);
