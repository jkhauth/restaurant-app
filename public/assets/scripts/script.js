// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger-input").val().trim(),
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
       function(){
        // Reload the page to get the updated list
        location.reload();
       }
    );
  });
  $(".delete").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var updatedBurger = {
      id: this.id
    }

    $.ajax("/api/burgers", {
      type: "PUT",
      data: updatedBurger
    }).then(
       function(){
        // Reload the page to get the updated list
        location.reload();
       }
    );
  });
});