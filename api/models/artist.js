'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define(
    'artists',
    {
      artist: DataTypes.STRING,
      genreId: DataTypes.INTEGER,
    },
    { tableName: 'Artists' }
  );
  Artist.associate = function (models) {
    // associations can be defined here
    models.artists.belongsTo(models.genres, { foreignKey: 'genreId' });
    models.artists.hasMany(models.albums, { foreignKey: 'artistId' });
    models.artists.hasMany(models.tracks, { foreignKey: 'id' });
  };
  return Artist;
};
