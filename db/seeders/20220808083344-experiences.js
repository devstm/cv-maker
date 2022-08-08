/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('@faker-js/faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const Experiences = [...Array(300)].map((_, i) => ({
      company: faker.faker.company.companyName(),
      profile_id: Math.floor(Math.random() * (150 - 1 + 1)) + 1,
      position: faker.faker.lorem.paragraph(),
      start_at: new Date(),
      end_at: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
    }));
    return queryInterface.bulkInsert('Experiences', Experiences, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Experiences', null, {});
  },
};
