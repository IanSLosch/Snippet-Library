$('.newsletter').on('submit', function(e) {
  e.preventDefault();
  const DATA = $(this).serialize();

  $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      dataType: 'json',
      data: DATA,
      xhrFields: {
          withCredentials: false,
      },
      success: function (data) {
          $('.inputs-wrap').html('<p class="newsletter-thanks">Thanks for signing up!</p>');
      },
      error: function (err) {
          console.log(err);
      }
  });
});
