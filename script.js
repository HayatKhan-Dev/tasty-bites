$(".details-btn").click(function () {
  const title = $(this).data("title");
  const price = $(this).data("price");
  const description = $(this).data("description");
  const ingredients = $(this).data("ingredients");

  $("#menuModalLabel").text(title);
  $("#modalPrice").text(price);
  $("#modalIngredients").text(ingredients);
  $("#modalDescription").text(description);
});

$(".btn").click(function (e) {
    e.preventDefault();
    alert("Your message has been received")
})