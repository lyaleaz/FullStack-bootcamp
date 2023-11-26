/*//vanilla JS
document.getElementById("container").style.display = "none";

//jQuery
$("#container").hide(); //when we select elements with jQuery, we also get methods that can work on the element, on top of the element itself


$(document).ready(function () {
  // Your test code here
  $("div").css("background-color", "lightblue");
});
const elem = $("#id");*/
/*const header = $("h1");
console.log(header);
*/ /*
const myQuery = function (selector) {
  if (selector[0] == "#") {
    const elementId = selector.split("#")[1]; //will return everything after the # in selector
    return document.getElementById(elementId);
  }
};
console.log(myQuery("#yourElementID"));*/
/*
// Ensure the document is ready before executing jQuery code
$(document).ready(function () {
  var header = $("#header");

  console.log(header);

  header.hide();
});*/
/*
const sayHi = function () {
  console.log("Hi!");
};

const $ = sayHi;

$(); //prints "Hi!"
$("h1");
*/

//7. Spot Check 2
$("h1").css("color", "blue");

$(".red-div").css("color", "red");

$("li:first-child").css("color", "green");

$("li:nth-child(2)").css("color", "pink");

$("#brown-div").css("color", "brown");

//Spot Check 3

$("#b1").addClass("box");
$("#b2").addClass("box");

//Spot check 4
$("#my-input").val("Terabyte");
//Getting Data Attributes - data()
const color = $("div").data().color;
console.log(color); //prints #2980b9

//Spot Check 5
const data = $("div").data();
console.log(
  "Item with barcode " + data.barcode + " will expire on " + data.expirationdate
);
const clicked = function () {
  alert("clicked!");
};

$("button").on("click", clicked);
///Spot Check 6
$(document).ready(function () {
  $("#hoverDiv").hover(
    function () {
      $(this).css("background-color", "blue");
    },
    function () {
      $(this).css("background-color", "lightgray");
    }
  );
});

///Spot Check 7

$("button").on("click", function () {
  alert($("#my-input").val());
});
