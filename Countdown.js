

//JS - jquery
var countDownDate = moment('2023-10-06 00:00 -0500', "YYYY-MM-DD HH:mm z");

// Update the count down every seconds
var x = setInterval(function () {

  var now = moment();
  var distance = countDownDate.diff(now);

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $(".days10").html(Math.floor(days / 10));
  $(".days1").html(days % 10);
  $(".hours10").html(Math.floor(hours / 10));
  $(".hours1").html(hours % 10);
  $(".minutes10").html(Math.floor(minutes / 10));
  $(".minutes1").html(minutes % 10);
  $(".seconds10").html(Math.floor(seconds / 10));
  $(".seconds1").html(seconds % 10);


  if (distance < 0) {
    clearInterval(x);
    $(".countdown").hide()
    $(".preorder").html("Listen Now")

    // $(".days10").html(0);
    // $(".days1").html(0);
    // $(".hours10").html(0);
    // $(".hours1").html(0);
    // $(".minutes10").html(0);
    // $(".minutes1").html(0);
    // $(".seconds10").html(0);
    // $(".seconds1").html(0);
  }
}, 500);



//HTML
<p class="countdown">
  <span class="days10">0</span>
  <span class="days1">0</span>
  :
  <span class="hours10">0</span>
  <span class="hours1">0</span>
  :
  <span class="minutes10">0</span>
  <span class="minutes1">0</span>
  :
  <span class="seconds10">0</span>
  <span class="seconds1">0</span>
</p>