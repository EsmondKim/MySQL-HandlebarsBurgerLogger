// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  console.log("Test");
  $(".change-eaten").on("click", function (event) {
    var id = $(this).data("id");
    var newEaten = $(this).data("noteaten");

    var newEatenState = {
      eaten: newEaten,
    };

    // Send the PUT request.
    console.log("Right before the PUT ajax.");
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState,
    }).then(function () {
      console.log("changed eaten to", newEaten);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("click", function () {
    let id = $(this).data("id");
    console.log("Into the Public JS", id);
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE",
    }).then(() => location.reload());
  });

  // $(".delete-burger").on("click", function (event) {
  //   let id = $(this).data("id");
  //   console.log("Click, click on Delete Button!");
  //   // Send the DELETE request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "DELETE",
  //   }).then(function () {
  //     console.log("Deleted", id);
  //     // Reload the page to get the updated list
  //     location.reload();
  //   });
  // });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
