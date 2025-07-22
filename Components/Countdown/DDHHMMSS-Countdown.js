// Initialize countdown HTML structure with jQuery
$('.countdown').html(
  '<span class="days10">0</span><span class="days1">0</span>:' +
  '<span class="hours10">0</span><span class="hours1">0</span>:' +
  '<span class="minutes10">0</span><span class="minutes1">0</span>:' +
  '<span class="seconds10">0</span><span class="seconds1">0</span>'
);

// Countdown setup
var countDownDate = moment('2023-10-06 00:00 -0500', "YYYY-MM-DD HH:mm z");

// Update the countdown every second
var x = setInterval(function () {
  var now = moment();
  var distance = countDownDate.diff(now);

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the respective elements
  $(".days10").text(Math.floor(days / 10));
  $(".days1").text(days % 10);
  $(".hours10").text(Math.floor(hours / 10));
  $(".hours1").text(hours % 10);
  $(".minutes10").text(Math.floor(minutes / 10));
  $(".minutes1").text(minutes % 10);
  $(".seconds10").text(Math.floor(seconds / 10));
  $(".seconds1").text(seconds % 10);

  // If the countdown is finished hide the countdown and show a message
  if (distance < 0) {
    clearInterval(x);
    $('.countdown').hide();
    // Assuming you want to change the content of a .preorder element if the countdown finishes
    $(".preorder").text("Listen Now");
  }
}, 1000);