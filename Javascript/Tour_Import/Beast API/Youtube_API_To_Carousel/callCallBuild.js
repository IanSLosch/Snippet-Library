// YOUTUBE API and VIDEO CAROUSEL

// Beast API is specifically for Sony Germany
// Refine this setup to make it more generic and useful
function beastApiGetPlaylistUrl() {
  $.ajax({
    url: 'https://services.sme-apps.com/cache/?id=74&lang=de_DE&type=artists',
    method: 'GET',
    dataType: 'json',
    error: () => {
      alert('Error fetching Beast Artist Data!')
    },
    success: function (response) {
      const playlistUrl = response.artists[0].youtube_playlist
  
      getPlaylist(playlistUrl)
    },
    error: function (error) {
      console.error(error);
    }
  })
}

beastApiGetPlaylistUrl()

function getPlaylist(url) {
  const regex = /[&?]list=([^&]+)/i
  const match = url.match(regex)
  const playlistId = match ? match[1] : ""
  const API_KEY = "<api_key>"
  const baseUrl = "https://www.googleapis.com/youtube/v3/"
  let html = ""

  $.ajax({
    url: `${baseUrl}playlistItems?part=snippet&key=${API_KEY}&playlistId=${playlistId}`,
    type: 'GET',
    dataType: 'text',
    success: (response) => {
      const responseJson = JSON.parse(response)

      for (let item of responseJson.items) {
        const title = item.snippet.title
        const videoId = item.snippet.resourceId.videoId

        html += `<div class="item"><div class="embed-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><p>${title}</p></div>`
      }

      createVideoCarousel(html)
    },
    error: (error) => {
      console.error(error)
    }
  })
}

// VIDEO CAROUSEL
function createVideoCarousel(html) {
  const videoCarousel = $("#videos-carousel")
  videoCarousel.html(html)
  const leftArrow = '<div class="owl-custom-nav-prev arrow"><i class="fas fa-arrow-circle-left"></i></div>'
  const rightArrow = '<div class="owl-custom-nav-next arrow"><i class="fas fa-arrow-circle-right"></i></div>'

  $('#videos-carousel').owlCarousel({
    loop: true,
    // stagePadding: 300,
    // margin: 20,
    nav: true,
    dots: false,
    items: 1,
    startPosition: 1,
    center: true,
    responsive: {
      0: {
        stagePadding: 50
      },
      700: {
        stagePadding: 120
      },
      1100: {
        stagePadding: 260
      }
    },
    navText: [
      leftArrow,
      rightArrow
    ]
  })
}