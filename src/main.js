import spotify from './Spotify';
import renderAlbums from './AlbumsList';
import renderAlbumInfo from './AlbumsInfo';
import renderAlbumTracks from './AlbumsTracks';

const albums = spotify.search.albums('Ramones');
const listAlbum = document.getElementById('album-list');

const albumsInfo = spotify.album.getAlbum('5uYDAwW0SZgcfOFkxrST64');
const albumInfo = document.getElementById('album-info');

const albumTrack = document.getElementById('album-tracks');

albums
  .then(data => renderAlbums(data.albums.items, listAlbum));

albumsInfo
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTrack));
