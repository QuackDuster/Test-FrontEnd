document.addEventListener('DOMContentLoaded', function () {
  const script = document.createElement('script');
  script.src = 'musicFunctions.js';
  document.body.appendChild(script);

  script.onload = function () {
    //Eliminacion de los artistas
    deleteAlbum('Adele');
    deleteAlbum('Prince');
    deleteAlbum('Justin Bieber');

    //Agregar artista
    addAlbum('Radiohead', 'Ok Computer', 5000000);

    const topSellingAlbums = getTopSellingAlbums();
    topSellingAlbums.forEach((album) => {
      document.getElementById('output').innerHTML += `<p>${album.artist} es un gran artista</p>`;
    });

    const totalAlbumSales = getTotalAlbumSales();
    document.getElementById(
      'output'
    ).innerHTML += `<p>Total de copias vendidas: ${totalAlbumSales}</p>`;

    const longNames = getLongNames();
    longNames.forEach((album) => {
      document.getElementById(
        'output'
      ).innerHTML += `<p>"${album.artist}" tiene un nombre muy grande</p>`;
    });

    document.getElementById('output').innerHTML += `
          <input type="text" id="searchInput" placeholder="Buscar albumes por nombre">
          <button id="searchButton">Buscar</button>
          <ul id="searchResults"></ul>
      `;

    document.getElementById('searchButton').addEventListener('click', function () {
      const searchTerm = document.getElementById('searchInput').value.trim();
      const results = searchAlbumByName(searchTerm);
      const resultList = document.getElementById('searchResults');
      resultList.innerHTML = '';
      results.forEach((album) => {
        resultList.innerHTML += `<li>El álbum ${album.name} del artista ${album.artist} vendió aproximadamente ${album.sales} copias.</li>`;
      });
    });
  };
});
