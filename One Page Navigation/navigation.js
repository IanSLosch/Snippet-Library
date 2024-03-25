
  // NAVIGATION
  $("#music, #videos").hide();

  // Function to manage visibility of sections
  function toggleVisibility(sectionToShow) {
    // First, hide all sections
    $("#home, #music, #videos").hide();

    // Then, show the requested section based on the passed argument
    $(sectionToShow).show();
  }

  // Event listeners for navigation items
  $(".set-home").on('click', function () {
    toggleVisibility("#home");
  });

  $(".set-music").on('click', function () {
    toggleVisibility("#music");
  });

  $(".set-videos").on('click', function () {
    toggleVisibility("#videos");
  });
