  // Scroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    const href = $(this).attr('href');
    const targetOffset = $(href).offset().top;
    const animationDuration = 500;

    $(".navbar").toggleClass("active");
    $('html, body').animate({
      scrollTop: targetOffset
    },
      animationDuration
    )
  });


  // or

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
  })


  // or (function)

  function addSmoothScrolling() {
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
    
      var targetId = $(this).attr("href");
      $('html, body').animate({ scrollTop: $(targetId).offset().top }, 'slow');
    });
  }
  
  addSmoothScrolling();
  