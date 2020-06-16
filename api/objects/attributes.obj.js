const models = require('../models');

const ATTRIBUTES = {
  artists: {
    OWN_COLUMNS: ['id', 'artist'],
    INDEX_OF_INCLUDES: { album: 0, genre: 1 },
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
    INDEX_OF_INCLUDES: { artist: 0, genre: 1 },
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
  genres: {
    OWN_COLUMNS: ['id', 'genre'],
    INDEX_OF_INCLUDES: {},
    INCLUDE: [],
  },
  tracks: {
    OWN_COLUMNS: ['id', 'track', 'albumId', 'artistId'],
    INDEX_OF_INCLUDES: { album: 0, artist: 1, genre: 2 },
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
