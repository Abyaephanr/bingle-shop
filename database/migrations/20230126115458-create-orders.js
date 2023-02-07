'use strict';

const sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', { 
      id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      total_order:{
        type: sequelize.DOUBLE,
        allowNull: false
      },
      status_order:{
        type: sequelize.BOOLEAN,
        allowNull: false
      },
      user_id: {
        type: sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
          as: "user_id"
        }
      },
      created_at: {
        type: sequelize.DATE,
        defaultValue: Date.now()
      },
      updated_at: {
        type: sequelize.DATE,
        defaultValue: Date.now()
      },
      deleted_at: {
        type: sequelize.DATE
      }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
