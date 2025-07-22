// MOBILE MENU
$('.mobile-menu-icon').on('click', function () {
  $("header").toggleClass('active')
  $("#nav-social").toggleClass('active')
  $(".line").toggleClass('active')
})

$('.nav-button').on('click', function () {
  if ($('#nav-menu').hasClass('active')) {
    $("header").toggleClass('active')
    $("#nav-menu").toggleClass('active')
    $("#nav-social").toggleClass('active')
    $(".line").toggleClass('active')
  }
})
