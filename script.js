$(document).ready(function() {
  
  var now = dayjs();
  $("#timeHolder").text(now.format("MMM D, YYYY [at] h:mm:ss a"));

  setInterval(function () {
    var now = dayjs();
    $("#timeHolder").text(now.format("MMM D, YYYY [at] h:mm:ss a"));
  }, 1000);
});

$(function () {
  $(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.setItem(time, text);
  })
});

for (var hours = 9; hours <= 17; hours++) {
  $(`#hour-${hours} .description`).val(localStorage.getItem(`hour-${hours}`));
}
    function hourtracker() {
      var currentHour = dayjs().hour();
    
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("hour-")[1]);
        $(this).toggleClass("past", blockHour < currentHour);
        $(this).toggleClass("present", blockHour === currentHour);
        $(this).toggleClass("future", blockHour > currentHour);
      });
    }
    
    hourtracker();

