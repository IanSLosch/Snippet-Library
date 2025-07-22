import 'owl.carousel';


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

function createVideoCarousel() {
  const videoCarousel = $("#video-carousel")
  const leftArrow = '<div class="owl-custom-nav-prev arrow"><i class="fa-solid fa-chevron-left"></i></div>'
  const rightArrow = '<div class="owl-custom-nav-next arrow"><i class="fa-solid fa-chevron-right"></i></div>'

  videoCarousel.owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    startPosition: 0,
    autoplayTimeout: 3000,
    autoplaySpeed: 500,
    margin: 55,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 3,
      }
    },
    navText: [
      leftArrow,
      rightArrow
    ]
  })
}
createVideoCarousel()





// COMBINED CAROUSEL FUNCTION

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

createCarousel("#music-carousel", 5000);
createCarousel("#video-carousel", 3000);