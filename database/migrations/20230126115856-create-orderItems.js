'use strict';

const sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orderItems', { 
      id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      price_order_items:{
        type: sequelize.DOUBLE,
        allowNull: false
      },
      quantity_items:{
        type: sequelize.INTEGER,
        allowNull: false
      },
      item_id: {
        type: sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "items",
          key: "id",
          as: "item_id"
        }
      },
      order_id: {
        type: sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "orders",
          key: "id",
          as: "order_id"
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
    await queryInterface.dropTable('orderItems');
  }
};
