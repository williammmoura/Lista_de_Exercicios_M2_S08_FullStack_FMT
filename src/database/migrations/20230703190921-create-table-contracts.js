'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      trainee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: 'trainees'
          },
          key: 'id'
        }
      },
      category_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName: 'categories'
          },
          key: 'id'
        }
      },
      company_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName: 'companies'
          },
          key: 'id'
        }
      },
      start_Validity:{
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      end_Validity:{
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      status:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      remuneration:{
        type: Sequelize.FLOAT,
        allowNull: false
      },
      extra:{
        type: Sequelize.FLOAT,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('contracts');

  }
};
