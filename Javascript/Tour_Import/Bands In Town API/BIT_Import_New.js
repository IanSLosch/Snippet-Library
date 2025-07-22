// Tourdate Import
$.ajax({
  url: `https://rest.bandsintown.com/artists/id_<BIT_ID>/events?app_id=45PRESS_<artist_name>`,
  method: 'GET',
  dataType: 'json',
  error: () => alert('Error fetching events!'),
  success: data => {
    const eventsContainer = $('#tour-dates');
    
    if (data.length) {
      // Generate HTML for each event and append to the events container
      const html = data.map(event => generateEventHtml(event)).join('');
      eventsContainer.html(html);

      // Hide the "toggle dates" button if fewer than 9 events are available
      if (data.length < 9) { 
        $("#toggle-dates").hide(); 
      }
    } else {
      // Display message if no events are found
      eventsContainer.html('<span class="no-events">Check back soon for new shows!</span>');
    }
  }
});

// Helper function to generate HTML for each event
function generateEventHtml(event) {
  const eventDate = moment(event.datetime).format('MMM DD');
  const venueName = event.venue.name;
  const venueRegion = event.venue.region !== null && event.venue.region !== '' ? event.venue.region : event.venue.country;
  const venueLocation = event.venue.city + ', ' + venueRegion;
  

  const offersHtml = event.offers.map(offer => 
    `<a href="${offer.url}" target="_blank" class="link btn">${offer.type}</a>`
  ).join('');

  return `
    <div class="event-group">
      <div class="event-date">${eventDate}</div>
      <div class="event-venue">${venueName}</div>
      <div class="event-location">${venueLocation}</div>
      <div class="event-links">${offersHtml}</div>
    </div>
  `;
}
