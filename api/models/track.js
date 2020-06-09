'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define(
    'tracks',
    {
      track: DataTypes.STRING,
      albumId: DataTypes.INTEGER,
      artistId: DataTypes.INTEGER,
      genreId: DataTypes.INTEGER,
      inMovie: DataTypes.STRING,
    },
    { tableName: 'Tracks' }
  );
  Track.associate = function (models) {
    // associations can be defined here
    models.tracks.belongsTo(models.albums, { foreignKey: 'albumId' });
    models.tracks.belongsTo(models.artists, { foreignKey: 'artistId' });
    models.tracks.belongsTo(models.genres, { foreignKey: 'genreId' });
  };
  return Track;
};
