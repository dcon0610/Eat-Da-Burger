// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $("button").not('#createBurger').on("click", function(event) {
    var id = this.id
  
    $.ajax("/api/burgers/" + id, {
      type: "POST",
    }).then(
      function() {
        
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#createBurger").on("click", function(event) {
    var text = $("#burgerInput").val()
    console.log(text)
    $.ajax("/api/createBurger/", {
      type: "POST",
      data: {"text": text}
    }).then(
      function() {
        
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})