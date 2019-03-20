$(document).ready(function() {
  $(".vote-up").submit(function(e) {
    e.preventDefault();

    var goalId = $(this).data("id");
    $.ajax({
      type: "PUT",
      url: "goals/" + goalId + "/vote-up",
      success: function(data) {
        console.log("voted up!");
      },
      error: function(err) {
        console.log(err.messsage);
      }
    });
  });

  $(".vote-down").submit(function(e) {
    e.preventDefault();

    var goalId = $(this).data("id");
    $.ajax({
      type: "PUT",
      url: "goals/" + goalId + "/vote-down",
      success: function(data) {
        console.log("voted down!");
      },
      error: function(err) {
        console.log(err.messsage);
      }
    });
  });
});
