/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('@faker-js/faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const skills = [...Array(300)].map((_, i) => ({
      name: faker.faker.company.companyName(),
      description: faker.faker.lorem.paragraph(),
    }));
    return queryInterface.bulkInsert('Skills', skills, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Skills', null, {});
  },
};
