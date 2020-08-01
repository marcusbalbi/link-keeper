const User = require('../../database/User');
const createFakeAny = require('./createFakeAny');
const crypto = require('crypto-js');

module.exports = async (amount) => {
  let users = {};
  const generator = (faker) => {
    const user = {
      login: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    users[user.email] = user;
    return { ...user, password: crypto.SHA1(user.password).toString() };
  };
  return {
    raw: users,
    data: await createFakeAny(User, generator, amount),
  };
};
