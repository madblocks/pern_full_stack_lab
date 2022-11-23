'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('actormovie', [
      {
        movieId: 1,
        actorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 2,
        actorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 3,
        actorId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 4,
        actorId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 4,
        actorId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 5,
        actorId: 5,
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
