
// needs cleaned

jQuery(document).ready(function ($) {
  $.ajax({
    url: 'https://services.sme-apps.com/cache/?id=74&lang=de_DE&type=events',
    method: 'GET',
    dataType: 'json',
    error: () => {
      console.log('error!');
    },
    success: (response) => {
      if (response.event_dates.length) {
        let tours = [];
        for (let event of response.event_dates) {
          let i = tours.findIndex(e => e.name === event.tour.name);
          if (i < 0) {
            tours.push({
              name: event.tour.name,
              events: []
            });
            i = tours.length - 1;
          }
          tours[i].events.push(event);
        }
        console.log(tours);

        if (tours.length) {
          createTourHTML(tours)
        }
      }
    }
  })
})

function createTourHTML(tours) {

  const tourSection = $("#tour-section")
  let html = ""


  for (let tour of tours) {
    html +=
      `<div class="tour"><h3>${tour.name}</h3><div class="tour-dates">`

    for (let show of tour.events) {
      html += '<div class="event-group">'
      html += '<div class="event-info">'
      html += `<div class="event-date">${moment(show.start_date).format('DD. MMMM YYYY')}</div>`
      html += `<div class="event-venue">${show.location}</div> | `
      html += `<div class="event-location">${show.city}</div>`
      html += '</div>'
      html += '<div class="event-links">'

      for (let ticket of show.ticket_links) {
        html += `<a class="link" href="${ticket.url} target="_blank" >${ticket.merchant.name}</a>`
      }

      html += '</div>'
      html += '</div>'
    }
    html += '</div></div>'
  }

  $("#tour-section").html(html)
}