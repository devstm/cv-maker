/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('@faker-js/faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const certifications = [...Array(300)].map((_, i) => ({
      title: faker.faker.company.companyName(),
      company: faker.faker.lorem.paragraph(),
      profile_id: Math.floor(Math.random() * (150 - 1 + 1)) + 1,
      start_at: new Date(),
      end_at: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
    }));
    return queryInterface.bulkInsert('Certifications', certifications, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Certifications', null, {});
  },
};
