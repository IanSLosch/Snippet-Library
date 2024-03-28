
  // NAVIGATION
  $("#music, #videos").hide();

  function showSection(sectionToShow) {
    $("#home, #music, #videos").hide();
    $(sectionToShow).show();
  }

  $(".set-home").on('click', function () {
    showSection("#home");
  });

  $(".set-music").on('click', function () {
    showSection("#music");
  });

  $(".set-videos").on('click', function () {
    showSection("#videos");
  });
