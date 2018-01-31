
const URL='https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=guatemala&api_key=c49b5502fde61cc1843230906d917da7&format=json';

function getArtist(){
  return fetch(URL)
  .then(response => response.json())
  .then(data => data.topartists.artist)
  .then(artists => artists.map(artist => {
    return {
      id: artist.mbid,
      name: artist.name,
      image: artist.image[3]['#text'],
      likes:200,
      comments: 140,
    }
  }))
}

export {getArtist}
