export const columns = {
  artists: [
    ['Artist', 'artist', 'text'],
    ['Genre', 'genreId', 'select'],
  ],

  albums: [
    ['Album', 'album', 'text'],
    ['Artist', 'artistId', 'autocomplete'],
    ['Genre', 'genreId', 'select'],
  ],

  tracks: [
    ['Track', 'track', 'text'],
    ['Album', 'albumId', 'autocomplete'],
    ['Artist', 'artistId', 'autocomplete'],
    ['Genre', 'genreId', 'select'],
  ],

  composers: [['Composer', 'composer', 'text']],

  performers: [['Performer', 'performer', 'text']],

  movies: [['Movie', 'movie', 'text']],

  genres: [['Genre', 'genre', 'text']],
};
