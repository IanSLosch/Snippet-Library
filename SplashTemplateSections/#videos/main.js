import 'owl.carousel';

jQuery(document).ready(function ($) {

  // CAROUSELS
  const leftArrow = '<div class="owl-custom-nav-prev arrow"><i class="fas fa-chevron-left"></i></div>';
  const rightArrow = '<div class="owl-custom-nav-next arrow"><i class="fas fa-chevron-right"></i></div>';

  function createCarousel(selector, timeout = 5000) {
    $(selector).owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      items: 1,
      startPosition: 0,
      autoplay: true,
      autoplayTimeout: timeout,
      autoplaySpeed: 500,
      margin: 55,
      center: true,
      navText: [leftArrow, rightArrow]
    });
  }

  createCarousel("#video-carousel", 8000);

});