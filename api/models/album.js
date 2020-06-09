'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define(
    'albums',
    {
      title: DataTypes.STRING,
      artistId: DataTypes.INTEGER,
      genreId: DataTypes.INTEGER,
    },
    { tableName: 'Albums' }
  );
  Album.associate = function (models) {
    // associations can be defined here
    models.albums.belongsTo(models.artists, { foreignKey: 'artistId' });
    models.albums.belongsTo(models.genres, { foreignKey: 'genreId' });
    models.albums.hasMany(models.tracks, { foreignKey: 'trackId' });
  };
  return Album;
};
