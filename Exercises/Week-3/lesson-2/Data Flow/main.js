const posts = [
  {
    name: "Uncle Jerome",
    text: "Happy birthday kido!",
  },
  {
    name: "BFF Charlene",
    text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD",
  },
  {
    name: "Old High School Teacher",
    text: "Hey ace, have a good one.",
  },
];

const render = function () {
  $("#postsContainer").empty();

  for (let post of posts) {
    let postBox = $(
      "<div class='post-box'><p class='name'>" +
        post.name +
        ":</p><p class='text'>" +
        post.text +
        "</p></div>"
    );
    $("#postsContainer").append(postBox);
  }
};

$("#submitButton").on("click", function () {
  const name = $("#nameInput").val();
  const text = $("#textInput").val();
  posts.push({ name, text });
  render();
});

render();
