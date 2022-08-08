/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('@faker-js/faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const users = [...Array(150)].map((_, i) => ({
      bio: faker.faker.internet.userName(),
      avatar:
        'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
      first_name: faker.faker.internet.userName(),
      middle_name: faker.faker.internet.userName(),
      last_name: faker.faker.internet.userName(),
      user_id: Math.floor(Math.random() * (50 - 1 + 1)) + 1,
      created_at: new Date(),
      updated_at: new Date(),
    }));
    return queryInterface.bulkInsert('Profiles', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Profiles', null, {});
  },
};
