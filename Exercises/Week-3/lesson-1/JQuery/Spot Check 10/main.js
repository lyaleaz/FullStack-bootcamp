//Spot Check 10
/*const names = [
  { first: "Alex", last: "Johnson" },
  { first: "Byron", last: "Loveall" },
  { first: "Cassandra", last: "Wuthers" },
  { first: "Deandre", last: "Rahm" },
  { first: "Ellena", last: "Freeman" },
];
for (let name of names) {
  "body".append(`<div>${name}</div>`);
}
*/
//Spot Check 11
"#plague".hover(function () {
  "#plague".remove();
});

//spot check 13
"button".on("click", function () {
  $("#blogs").append("<div class='blog'>Cool blog</div>");
});

"#blogs".on("click", ".blog", function () {
  $(this).text("uncool blog");
});
