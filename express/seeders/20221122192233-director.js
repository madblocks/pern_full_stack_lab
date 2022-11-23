'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('directors', [
    {
      firstName: 'Steven',
      lastName: 'Spielberg',
      birthYear: 1946,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Robert',
      lastName: 'Zemeckis',
      birthYear: 1951,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Steven',
      lastName: 'Soderbergh',
      birthYear: 1963,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Cameron',
      lastName: 'Crowe',
      birthYear: 1957,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
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
