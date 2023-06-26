'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //Subindo as informações no banco de dados
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      //Atributos do "id"
      id: {
        type: Sequelize. INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  //Excluindo os dados do banco de dados
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
  }
};
