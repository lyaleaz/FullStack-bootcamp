$(document).ready(function () {
  const colors = $("#colors span");

  for (let i = 0; i < colors.length; i++) {
    const color = $(colors[i]).data("color");

    $(colors[i]).addClass("picker").css("background-color", color);

    $(colors[i]).click(function () {
      $(".box").css("background-color", color);
    });
  }
});
