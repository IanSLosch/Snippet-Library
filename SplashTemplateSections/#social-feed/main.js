import 'owl.carousel';

function createSocialCarousel() {
  $('#instagram-feed').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    startPosition: 0,
    autoplaySpeed: 500,
    center: false,
    navText: [leftArrow, rightArrow],
    responsive: {
      0: {
        items: 1.2,
        margin: 20
      },
      700: {
        items: 2.2,
        margin: 40
      },
      1100: {
        items: 3,
        margin: 50
      }
    },
  });
}



$.ajax({
  url: 'https://www.juicer.io/api/feeds/45p_testing',
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

      if (count > 8) {

      }

      html += `
              <div class="item">
                <a href="${item.full_url}" target="_blank" ${img ? `style="background-image: url('${img}');"` : ''}>
                  <span ${!img ? 'style="opacity: 1;"' : ''}>${text}</span>
                </a>
              </div>
            `;

      if (++count >= 8) break;
    }

    $('#instagram-feed').html(html);

    createSocialCarousel();
  },
  error: function () {
    console.error('Error loading feed.');
  },
});