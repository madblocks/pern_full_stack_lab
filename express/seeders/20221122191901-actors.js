'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('actors', 
    [
      {
        firstName: 'Tom',
        lastName: 'Hanks',
        birthYear: 1956,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Tom',
        lastName: 'Cruise',
        birthYear: 1962,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Brad',
        lastName: 'Pitt',
        birthYear: 1963,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Leonardo',
        lastName: 'DiCaprio',
        birthYear: 1974,
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
    await queryInterface.bulkDelete('actors', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
