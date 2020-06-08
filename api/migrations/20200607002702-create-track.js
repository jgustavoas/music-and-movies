'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      track: {
        type: Sequelize.STRING,
      },
      albumId: {
        type: Sequelize.INTEGER,
      },
      artistId: {
        type: Sequelize.INTEGER,
      },
      genreId: {
        type: Sequelize.INTEGER,
      },
      composer: {
        type: Sequelize.STRING,
      },
      inMovie: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tracks');
  },
};
