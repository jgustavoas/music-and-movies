export const columns = {
  artists: [
    ['Artist', 'artist', 'text'],
    ['Genre', 'genreId', 'select', 'genres'],
  ],

  albums: [
    ['Album', 'album', 'text'],
    ['Artist', 'artistId', 'datalist', 'artists'],
    ['Genre', 'genreId', 'select', 'genres'],
  ],

  tracks: [
    ['Track', 'track', 'text'],
    ['Album', 'albumId', 'datalist', 'albums'],
    ['Artist', 'artistId', 'datalist', 'artists'],
    ['Genre', 'genreId', 'select', 'genres'],
  ],

  composers: [['Composer', 'composer', 'text']],

  performers: [['Performer', 'performer', 'text']],

  movies: [['Movie', 'movie', 'text']],

  genres: [['Genre', 'genre', 'text']],
};
