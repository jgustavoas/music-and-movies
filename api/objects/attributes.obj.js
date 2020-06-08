const models = require('../models');

const ATTRIBUTES = {
  Artist: {
    COLUMNS: ['id', 'name'],
    INCLUDE: [
      {
        model: models.Genre,
        attributes: { exclude: ['createdAt', 'updatedAt', 'genreId'] },
      },
    ],
  },
  Album: {
    COLUMNS: ['id', 'title'],
    INCLUDE: [
      {
        model: models.Artist,
        attributes: { exclude: ['createdAt', 'updatedAt', 'genreId'] },
      },
      {
        model: models.Genre,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
    ],
  },
  Genre: {
    COLUMNS: ['id', 'genre'],
    INCLUDE: [],
  },
  Track: {
    COLUMNS: ['id', 'track'],
    INCLUDE: [
      {
        model: models.Album,
        attributes: { exclude: ['createdAt', 'updatedAt', 'genreId'] },
      },
      {
        model: models.Artist,
        attributes: { exclude: ['createdAt', 'updatedAt', 'genreId'] },
      },
      {
        model: models.Genre,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
    ],
  },
};

module.exports = ATTRIBUTES;
