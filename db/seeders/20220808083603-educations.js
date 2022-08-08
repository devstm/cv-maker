/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('@faker-js/faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const Educations = [...Array(300)].map((_, i) => ({
      university: faker.faker.company.companyName(),
      profile_id: Math.floor(Math.random() * (150 - 1 + 1)) + 1,
      degree: faker.faker.lorem.paragraph(),
      collage: faker.faker.lorem.paragraph(),
      department: faker.faker.lorem.paragraph(),
      start_at: new Date(),
      end_at: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
    }));
    return queryInterface.bulkInsert('Educations', Educations, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Educations', null, {});
  },
};
