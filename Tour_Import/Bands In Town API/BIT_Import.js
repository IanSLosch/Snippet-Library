  // Tourdate Import
  $.ajax({
    url: 'https://rest.bandsintown.com/artists/id_<BIT_ID>/events?app_id=45PRESS_<artist_name>',
    method: 'GET',
    dataType: 'json',
    error: () => {
      alert('Error fetching events!');
    }, 
    success: data => {
      const events = $('#tour-dates');
      let html = '';
      let n = 0
      if (data.length) {
        for (let event of data) {
          n++
          html += '<div class="event-group">';
          html += '<div class="event-date">' + moment(event.datetime).format('MMM DD').toUpperCase() + '</div>';
          html += '<div class="event-venue">' + event.venue.name.toUpperCase() + '</div>';
          html += '<div class="event-location">' + event.venue.location.toUpperCase() + '</div>';
          html += '<div class="event-links">';
          for (let offer of event.offers) {
            html += '<a href="' + offer.url + '" target="_blank" class="link">' + offer.type.toUpperCase() + '</a>';
          }
          html += '</div>';
          html += '</div>';
        }
        events.html(html);
      } else {
        events.html('<span class="no-events">Check back soon for new shows!</span>');
      }
      if (n<9) { 
        $("#toggle-dates").hide(); 
      }
    }
  });