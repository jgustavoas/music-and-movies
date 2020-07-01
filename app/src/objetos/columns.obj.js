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
  genres: [['Genre', 'genre']],
};
