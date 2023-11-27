$(document).ready(function () {
  $(".item[data-instock='true']").on("click", function () {
    const itemName = $(this).text();
    const cartItem = `<div class="cart-item">${itemName}</div>`;
    $("#cart").append(cartItem);
  });
});
