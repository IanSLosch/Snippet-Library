
  // RENDER ALBUMS
  const albums = [
    {
      title: "Pies Descalzaos",
      date: "1995",
      link: "https://SML.lnk.to/PiesDescalzos",
      imgUrl: "../dist/img/covers/PiesDescalzaos1995.png"
    },
    {
      title: "Dónde Están los Ladrones?",
      date: "1998",
      link: "https://SML.lnk.to/DondeEstanLosLadrones",
      imgUrl: "../dist/img/covers/DondeEstanlosLadrones1998.png"
    },
    {
      title: "MTV Plugged",
      date: "2000",
      link: "https://SML.lnk.to/MTVUnplugged",
      imgUrl: "../dist/img/covers/MTVUnplugged2000.png"
    },

  ];


  const albumList = $("#album-list");
  const sortSelect = $("#sort");

  // Function to create a card element
  function createCard(album) {
    const card = $('<div class="card"></div>');
    const img = $(`<img src="${album.imgUrl}" alt="${album.title}" class="cover">`);
    const titleAndLink = $(`<div class="info-wrapper"><div class="title">${album.title}, ${album.date}</div><a href="${album.link}" target="_blank">Listen</a></div>`)

    card.append(img, titleAndLink);
    return card;
  } 

  // Function to render the album list
  function renderAlbums(albumsArray) {
    albumList.empty();
    albumsArray.forEach(album => {
      const card = createCard(album);
      albumList.append(card);
    });
  }

  function sortByTitle(albums) {
    albums.sort((a, b) => a.title.localeCompare(b.title));
  }

  function sortByRecentDate(albums) {
    albums.sort((a, b) => parseInt(b.date) - parseInt(a.date));
  }

  function sortByOldestDate(albums) {
    albums.sort((a, b) => parseInt(a.date) - parseInt(b.date));
  }

  sortSelect.on("change", function () {
    const selectedValue = $(this).val();

    if (selectedValue === 'title') {
      sortByTitle(albums);
    } else if (selectedValue === 'new-old') {
      sortByRecentDate(albums);
    } else if (selectedValue === 'old-new') {
      sortByOldestDate(albums);
    }
    renderAlbums(albums);
  });


  sortByRecentDate(albums)
  renderAlbums(albums);