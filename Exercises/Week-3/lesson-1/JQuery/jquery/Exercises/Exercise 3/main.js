for (let i = 1; i <= 5; i++) {
  let box = $('<div class="box">').text(i);
  "body".append(box);
}

// Set up hover behavior
".box".hover(
  function () {
    // Mouse over: Change background color to green
    this.css("background-color", "#2ecc71");
  },
  function () {
    // Mouse out: Change background color back to original
    this.css("background-color", "#8e44ad");
  }
);

// Hover behavior for the space between boxes
".box".mousemove(function (event) {
  let boxWidth = this.width();
  let mouseX = event.pageX - this.offset().left;

  // Check if mouse is in the space between boxes
  if (mouseX < boxWidth / 2) {
    // Change the background color of the previous box
    this.prev().css("background-color", "#3498db");
  } else {
    // Change the background color of the next box
    this.next().css("background-color", "#3498db");
  }
});
