import { expect } from 'chai';
import spotify from '../src/Spotify';

describe('Spotify', () => {
  it('should be an object', () => {
    expect(spotify).to.be.an.object;
  });
  it('should have search', () => {
    expect(spotify.search).to.exist;
  });
  it('should have album', () => {
    expect(spotify.album).to.exist;
  });
});
