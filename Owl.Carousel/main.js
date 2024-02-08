  // Music Carousel
  $('.carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 500,
    margin: 55,
    items: 1,
    center: true,
    navText: [
      '<div class="owl-custom-nav-prev owl-custom-nav"><i class="fad fa-chevron-circle-left" alt="Previous Slide"></i></div>',
      '<div class="owl-custom-nav-next owl-custom-nav"><i class="fad fa-chevron-circle-right" alt="Previous Slide"></i></div>'
    ]
  })