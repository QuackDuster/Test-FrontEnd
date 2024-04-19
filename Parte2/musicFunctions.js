// Datos
const musicData = [
  { artist: 'Adele', name: '25', sales: 1731000 },
  { artist: 'Drake', name: 'Views', sales: 1608000 },
  { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
  { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
  { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
  {
    artist: 'Original Broadway Cast Recording',
    name: 'Hamilton: An American Musical',
    sales: 820000,
  },
  { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
  { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
  { artist: 'Rihanna', name: 'Anti', sales: 603000 },
  { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 },
];

function getTopSellingAlbums() {
  return musicData.filter((album) => album.sales > 1000000);
}

function getTotalAlbumSales() {
  return musicData.reduce((total, album) => total + album.sales, 0);
}

function getLongNames() {
  return musicData.filter((album) => album.name.length > 8);
}

function searchAlbumByName(albumName) {
  return musicData.filter((album) => album.name.toLowerCase().includes(albumName.toLowerCase()));
}

function deleteAlbum(artistName) {
  const index = musicData.findIndex((album) => album.artist === artistName);
  if (index !== -1) {
    musicData.splice(index, 1);
  }
}

function addAlbum(artist, name, sales) {
  musicData.push({ artist, name, sales });
}

window.getTopSellingAlbums = getTopSellingAlbums;
window.getTotalAlbumSales = getTotalAlbumSales;
window.getLongNames = getLongNames;
window.searchAlbumByName = searchAlbumByName;
window.deleteAlbum = deleteAlbum;
window.addAlbum = addAlbum;
