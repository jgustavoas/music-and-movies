export const columns = {
  artists: [
    ['Artist', 'artist'],
    ['Genre', 'genreId'],
  ],
  albums: [
    ['Album', 'album'],
    ['Artist', 'artistId'],
    ['Genre', 'genreId'],
  ],
  tracks: [
    ['Track', 'track'],
    ['Album', 'albumId'],
    ['Artist', 'artistId'],
    ['Genre', 'genreId'],
  ],
  composers: [['Composer', 'composer']],
  performers: [['Performer', 'performer']],
  movies: [['Movie', 'movie']],
  genres: [['Genre', 'genre']],
};
