'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    'genres',
    {
      genre: DataTypes.STRING,
    },
    { tableName: 'Genres' }
  );
  Genre.associate = function (models) {
    // associations can be defined here
  };
  return Genre;
};
