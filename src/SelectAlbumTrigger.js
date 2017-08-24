import spotify from './Spotify';
import renderAlbumInfo from './AlbumsInfo';
import renderAlbumTracks from './AlbumsTracks';

const listAlbums = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumTrack = document.getElementById('album-tracks');


function makeRequest(albumID) {
  spotify.album.getAlbum(albumID)
    .then(data => renderAlbumInfo(data, albumInfo))
    .then(data => renderAlbumTracks(data.tracks.items, albumTrack));
}

export default function selectAlbumClickTrigger() {
  listAlbums.addEventListener('click', (e) => {
    const target = e.target;
    makeRequest(target.getAttribute('data-album-id'));
  });
}
