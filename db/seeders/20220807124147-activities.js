/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('@faker-js/faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const activities = [...Array(300)].map((_, i) => ({
      title: faker.faker.company.companyName(),
      link: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
      image:
        'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
      description: faker.faker.lorem.paragraph(),
      profile_id: Math.floor(Math.random() * (150 - 1 + 1)) + 1,
      created_at: new Date(),
      updated_at: new Date(),
    }));
    return queryInterface.bulkInsert('Activities', activities, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Activities', null, {});
  },
};
