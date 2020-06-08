'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define(
    'Album',
    {
      title: DataTypes.STRING,
      artistId: DataTypes.INTEGER,
      genreId: DataTypes.INTEGER,
    },
    {}
  );
  Album.associate = function (models) {
    // associations can be defined here
    models.Album.belongsTo(models.Artist, { foreignKey: 'artistId' });
    models.Album.belongsTo(models.Genre, { foreignKey: 'genreId' });
    models.Album.hasMany(models.Track, { foreignKey: 'trackId' });
  };
  return Album;
};
