  // MOBILE MENU
  $('.hamburger').on('click', function () {
    $("<#menu-to-toggle)").toggleClass('active')
    $(".line").toggleClass('active')
  })

  $('.nav-button').on('click', function () {
    if ($('<#menu-to-toggle)').hasClass('active')) {
      $("<#menu-to-toggle)").toggleClass('active')
      $(".line").toggleClass('active')
    }
  })