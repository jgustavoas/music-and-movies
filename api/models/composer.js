'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    'composers',
    {
      movie: DataTypes.STRING,
      genreId: DataTypes.INTEGER,
    },
    { tableName: 'Composers' }
  );
  Movie.associate = function (models) {
    // associations can be defined here
  };
  return Movie;
};
