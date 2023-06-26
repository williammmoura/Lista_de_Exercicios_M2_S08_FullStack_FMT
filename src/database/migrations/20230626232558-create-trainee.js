'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trainees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      rg: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      primary_phone_contact: {
        type: Sequelize.STRING
      },
      second_phone_contact: {
        type: Sequelize.STRING
      },
      date_birth: {
        type: Sequelize.DATE
      },
      father_name: {
        type: Sequelize.STRING
      },
      mother_name: {
        type: Sequelize.STRING
      },
      have_special_needs: {
        type: Sequelize.BOOLEAN
      },
      create_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Trainees');
  }
};