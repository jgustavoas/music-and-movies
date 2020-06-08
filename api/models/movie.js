'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    movie: DataTypes.STRING,
    genreId: DataTypes.INTEGER
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};