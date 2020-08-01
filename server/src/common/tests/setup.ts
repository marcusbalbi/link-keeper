import app from '../../app';
const Logon = require('../actions/login/Logon');
const createFakeUser = require('./helpers/createFakeUsers');
const request = require('supertest');

global.request = request(app);

const connection = require('../database/connection');
afterAll((done) => {
  connection.mongoose.disconnect().then(done);
});

beforeAll((done) => {
  connection.connect().then(async () => {
    let { raw, data } = await createFakeUser(1);
    let user = raw[data[0].email];
    global.auth = await Logon(user.login, user.password);
    global.commonHeaders = { authorization: global.auth };
    done();
  });
  // connection.connect()
  // .then(() => { done() })
  // .catch((pError) => { done(pError) })
});
