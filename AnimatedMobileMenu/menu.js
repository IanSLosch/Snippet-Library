// MOBILE MENU
$('.mobile-menu-icon').on('click', function () {
  $("#nav-menu").toggleClass('active')
  $("header").toggleClass('active')
  $(".line").toggleClass('active')
})

$('.nav-button').on('click', function () {
  if ($('#nav-menu').hasClass('active')) {
    $("#nav-menu").toggleClass('active')
    $("header").toggleClass('active')
    $(".line").toggleClass('active')
  }
})
