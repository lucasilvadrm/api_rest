const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Luís',
          email: 'luis@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Zézin',
          email: 'zezin@gmail.com',
          password_hash: await bcryptjs.hash('323221', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Túlio',
          email: 'tulio@gmail.com',
          password_hash: await bcryptjs.hash('431243', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down() {},
};
