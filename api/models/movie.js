'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    'movies',
    {
      movie: DataTypes.STRING,
      genreId: DataTypes.INTEGER,
    },
    { tableName: 'Movies' }
  );
  Movie.associate = function (models) {
    // associations can be defined here
    models.movies.belongsTo(models.genres, { foreignKey: 'genreId' });
  };
  return Movie;
};
