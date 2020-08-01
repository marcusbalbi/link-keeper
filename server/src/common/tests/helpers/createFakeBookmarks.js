const Bookmark = require('../../database/Bookmark');
const createFakeAny = require('./createFakeAny');

module.exports = async (amount) => {
  const generator = (faker) => {
    return {
      title: faker.name.title(),
      link: faker.internet.url(),
      domain: faker.internet.domainName(),
    };
  };
  return createFakeAny(Bookmark, generator, amount);
};
