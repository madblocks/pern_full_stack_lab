'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('movies', [
    {
        title: 'Forrest Gump',
        directorId: 2,
        releaseDate: 1994,
        genre: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Jerry Maguire',
        directorId: 4,
        releaseDate: 1996,
        genre: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Oceans Eleven',
        directorId: 3,
        releaseDate: 2001,
        genre: 'Crime',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Catch Me If You Can',
        directorId: 1,
        releaseDate: 2002,
        genre: 'Crime',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Jaws',
        directorId: 1,
        releaseDate: 1975,
        genre: 'Crime',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
