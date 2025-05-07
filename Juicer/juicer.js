(function ($) {
  $.fn.juicer = function (options) {
    const $selector = $(this);

    // Default options
    const defaults = {
      limit: 6,
      feedMoreButton: $('.juicer-button'),
      buttonMessage: 'View More',
    };

    const opts = $.extend({}, defaults, options);
    const initialLimit = opts.limit;

    // Handle the "View More/Less" button click
    opts.feedMoreButton.on('click', function (e) {
      e.preventDefault();

      opts.limit = opts.limit > 0 ? 0 : initialLimit;
      $(this).text(opts.limit === 0 ? 'View Less' : opts.buttonMessage);

      // Reload the feed with the updated limit
      loadFeed();
    });

    // Fetch and display feed data
    function loadFeed() {
      $.ajax({
        url: 'https://www.juicer.io/api/feeds/thomasday',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
          const posts = data.posts.items;
          let html = '';
          let count = 0;

          for (const item of posts) {
            const text = item.unformatted_message
              ? item.unformatted_message.replace(/<\/?[^>]+(>|$)/g, '')
              : ' ';
            const img = item.image;

            html += `
              <div>
                <a href="${item.full_url}" target="_blank" ${img ? `style="background-image: url('${img}');"` : ''}>
                  <span ${!img ? 'style="opacity: 1;"' : ''}>${text}</span>
                </a>
              </div>
            `;

            if (opts.limit > 0 && ++count >= opts.limit) break;
          }

          $selector.html(html);

          // If no limit, ensure all items are visible
          if (opts.limit === 0) {
            $('#feed > div').css('display', 'block');
          }
        },
        error: function () {
          console.error('Error loading feed.');
        },
      });
    }

    // Initial feed load
    loadFeed();
  };
})(jQuery);
