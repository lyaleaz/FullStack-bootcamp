$(".box").hover(function () {
  $(this).css("background-color", "blue");
});
const aDynamicDiv = "<div class='mine'>Oh yes</div>";
const elem = $(aDynamicDiv);
console.log(elem);

const text = "Banana";
const item = $("<div class=fruit>" + text + "</div>");

console.log(item); //prints <div class=fruit>Banana</div> as a jQuery object - this is what we created!
