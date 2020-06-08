'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define(
    'Track',
    {
      track: DataTypes.STRING,
      albumId: DataTypes.INTEGER,
      artistId: DataTypes.INTEGER,
      genreId: DataTypes.INTEGER,
      inMovie: DataTypes.STRING,
    },
    {}
  );
  Track.associate = function (models) {
    // associations can be defined here
    models.Track.belongsTo(models.Album, { foreignKey: 'albumId' });
    models.Track.belongsTo(models.Artist, { foreignKey: 'artistId' });
    models.Track.belongsTo(models.Genre, { foreignKey: 'genreId' });
  };
  return Track;
};
