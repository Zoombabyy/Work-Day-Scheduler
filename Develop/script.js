var todaysDate = moment().format("ddd, MMM do YYYY");
var todaysTime = moment().format("LT");
$("#currentDay").html(todaysDate);
$("#currentTime").html(todaysTime);

function timeTracker() {
  //get current number of hours.
  var timeNow = moment().hour();

  // loop over time blocks
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    // To check the time and add the classes for background indicators
    if (blockTime < timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (blockTime === timeNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

$(document).ready(function () {
  // saveBtn click listener
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });

  // Get item from local storage if any
  $("#eight .description").val(localStorage.getItem("eight"));
  $("#nine .description").val(localStorage.getItem("nine"));
  $("#ten .description").val(localStorage.getItem("ten"));
  $("#eleven .description").val(localStorage.getItem("eleven"));
  $("#twelve .description").val(localStorage.getItem("twelve"));
  $("#thirteen .description").val(localStorage.getItem("thirteen"));
  $("#fourteen .description").val(localStorage.getItem("fourteen"));
  $("#fifteen .description").val(localStorage.getItem("fifteen"));
  $("#sixteen .description").val(localStorage.getItem("sixteen"));
  $("#seventeen .description").val(localStorage.getItem("seventeen"));

  timeTracker();
});
