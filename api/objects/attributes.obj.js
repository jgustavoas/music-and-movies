const models = require('../models');

const ATTRIBUTES = {
  artists: {
    COLUMNS: ['id', 'name'],
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
    COLUMNS: ['id', 'title'],
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
    COLUMNS: ['id', 'track'],
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
