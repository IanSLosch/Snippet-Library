import "owl.carousel"

// MUSIC CAROUSEL
function createMusicCarousel() {
  const musicCarousel = $("#music-carousel")
  const leftArrow = '<div class="owl-custom-nav-prev arrow"><i class="fa-solid fa-chevron-left"></i></div>'
  const rightArrow = '<div class="owl-custom-nav-next arrow"><i class="fa-solid fa-chevron-right"></i></div>'

  musicCarousel.owlCarousel({
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
createMusicCarousel()

// VIDEO CAROUSEL
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

