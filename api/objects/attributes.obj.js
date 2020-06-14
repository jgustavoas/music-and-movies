const models = require('../models');

const ATTRIBUTES = {
  artists: {
    COLUMNS: ['id', 'artist'],
    INCLUDE: [
      {
        model: models.albums,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
      {
        model: models.genres,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
    ],
  },
  albums: {
    COLUMNS: ['id', 'album', 'artistId', 'genreId'],
    INCLUDE: [
      {
        model: models.artists,
        attributes: { exclude: ['createdAt', 'updatedAt', 'genreId'] },
      },
      {
        model: models.genres,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
    ],
  },
  genres: {
    COLUMNS: ['id', 'genre'],
    INCLUDE: [],
  },
  tracks: {
    COLUMNS: ['id', 'track', 'albumId', 'artistId'],
    INCLUDE: [
      {
        model: models.albums,
        attributes: { exclude: ['createdAt', 'updatedAt', 'genreId'] },
      },
      {
        model: models.artists,
        attributes: { exclude: ['createdAt', 'updatedAt', 'genreId'] },
      },
      {
        model: models.genres,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
    ],
  },
};

module.exports = ATTRIBUTES;
