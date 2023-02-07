'use strict';

const sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('items', { 
      id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name_item: {
        type: sequelize.STRING,
        allowNull: false
      },
      price_item: {
        type: sequelize.DOUBLE,
        allowNull: false
      },
      stock_item: {
        type: sequelize.INTEGER,
        allowNull: false
      },
      description_item: {
        type: sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable('items');
  }
};

