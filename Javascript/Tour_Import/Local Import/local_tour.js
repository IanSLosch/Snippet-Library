
const eventArray = [

  {
    "datetime": "May 10th",
    "venue": {
      "location": "Dallas, TX",
      "name": "Ruins",
    },
    "offer":
    {
      "type": "Tickets",
      "url": "https://www.squadup.com/events/the-artit-the-gallery-tour-at-ruins-1?legacy=0"
    }
  },

]

const events = $('#tour-dates');
let html = '';
let n = 0
if (eventArray.length) {
  for (let event of eventArray) {
    n++
    html += `
    <div class="event-group">
    <div class="event-date">${event.datetime}</div>
    <div class="event-venue">${event.venue.name}</div>
    <div class="event-location">${event.venue.location}</div>
    <div class="event-links">
    <a href="${event.offer.url}" target="_blank" class="link btn">${event.offer.type}</a>
    </div>
    </div>
    `
  }
  events.html(html);
} else {
  events.html('<span class="no-events">Check back soon for new shows!</span>');
}