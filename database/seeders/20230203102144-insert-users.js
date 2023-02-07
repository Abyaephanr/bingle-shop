'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [
      {
        name_user: 'Budi',
        age_user: 30,
        address_user: "Cijantung",
        phone_user: 628221,
        email_user: "budi@gmail.com",
        password_user: "budiabcdefgh"
      },
      {
        name_user: "Bagus",
        age_user: 23,
        address_user: "Kelapa Gading",
        phone_user: 628787,
        email_user: "bagus@gmail.com",
        password_user: "bagusabcdefgh"
      },
      {
        name_user: "Bagas",
        age_user: 25,
        address_user: "Pantai Indah Kapuk",
        phone_user: 628567,
        email_user: "bagas@gmail.com",
        password_user: "bagasabcdefgh"
      },
      {
        name_user: "Bambang",
        age_user: 47,
        address_user: "Cempaka Putih",
        phone_user: 628131,
        email_user: "bambang@gmail.com",
        password_user: "bambangabcdefgh"
      },
      {
        name_user: "Bimo",
        age_user: 17,
        address_user: "Bintaro",
        phone_user: 628123,
        email_user: "bimo@yahoo.co.id",
        password_user: "bimoabcdefgh"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
