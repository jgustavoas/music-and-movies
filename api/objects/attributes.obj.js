const models = require('../models');

const ATTRIBUTES = {
  artists: {
    OWN_COLUMNS: ['id', 'artist', 'genreId'],
    INCLUDE: [
      {
        model: models.albums,
        attributes: {
          include: ['album'],
          exclude: ['createdAt', 'updatedAt'],
        },
      },
      {
        model: models.genres,
        attributes: {
          include: ['genre'],
          exclude: ['createdAt', 'updatedAt'],
        },
      },
    ],
  },
  albums: {
    OWN_COLUMNS: ['id', 'album', 'artistId', 'genreId'],
    INCLUDE: [
      {
        model: models.artists,
        attributes: {
          include: ['artist'],
          exclude: ['createdAt', 'updatedAt', 'genreId'],
        },
      },
      {
        model: models.genres,
        attributes: {
          include: ['genre'],
          exclude: ['createdAt', 'updatedAt'],
        },
      },
    ],
  },
  composers: {
    OWN_COLUMNS: ['id', 'composer'],
    INCLUDE: [],
  },
  movies: {
    OWN_COLUMNS: ['id', 'movie'],
    INCLUDE: [],
  },
  genres: {
    OWN_COLUMNS: ['id', 'genre'],
    INCLUDE: [],
  },
  tracks: {
    OWN_COLUMNS: ['id', 'track', 'albumId', 'artistId', 'genreId'],
    INCLUDE: [
      {
        model: models.albums,
        attributes: {
          include: ['album'],
          exclude: ['createdAt', 'updatedAt', 'genreId'],
        },
      },
      {
        model: models.artists,
        attributes: {
          include: ['artist'],
          exclude: ['createdAt', 'updatedAt', 'genreId'],
        },
      },
      {
        model: models.genres,
        attributes: {
          include: ['genre'],
          exclude: ['createdAt', 'updatedAt'],
        },
      },
    ],
  },
};

module.exports = ATTRIBUTES;
