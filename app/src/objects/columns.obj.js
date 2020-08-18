// fields template: [label, column, inputType]
const fields = {
  artist: ['Artist', 'artist', 'text'],
  artistsId: ['Artist', 'artistId', 'datalist', 'artists'],
  album: ['Album', 'album', 'text'],
  albumId: ['Album', 'albumId', 'datalist', 'albums'],
  track: ['Track', 'track', 'text'],
  trackId: ['Track', 'trackId', 'datalist', 'tracks'],
  movie: ['Movie', 'movie', 'text'],
  genre: ['Genre', 'genre', 'text'],
  genreId: ['Genre', 'genreId', 'select', 'genres'],
};

const {
  artist,
  artistsId,
  album,
  albumId,
  track,
  movie,
  genre,
  genreId,
} = fields;

export const columns = {
  artists: [artist, genreId],
  albums: [album, artistsId, genreId],
  tracks: [track, albumId, artistsId, genreId],
  movies: [movie, genreId],
  genres: [genre],
};
