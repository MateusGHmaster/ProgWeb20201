'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Areas', [
        {
          id: 1,
          nome: 'Ciências Exatas',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
        id: 2,
        nome: 'Ciências Humanas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        nome: 'Ciências Biológicas',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Areas', null, {});
  }
};
