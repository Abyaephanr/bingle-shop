'use strict';

const sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name_user: {
        type: sequelize.STRING,
        allowNull: false
      },
      age_user: {
        type: sequelize.INTEGER,
        allowNull: true
      },
      address_user: {
        type: sequelize.STRING,
        allowNull: true
      },
      phone_user: {
        type: sequelize.INTEGER,
        allowNull: false
      },
      email_user: {
        type: sequelize.STRING,
        allowNull: false
      },
      password_user: {
        type: sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('users');
  }
};
