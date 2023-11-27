//add ex1
$("#button").click(function () {
  var inputText = $("#Input").val();
  $("#outputDiv").on(`<div>${inputText}</div>`);
});
//remove ex2
$("#outputDiv").on("click", "div", function () {
  $(this).remove();
});
