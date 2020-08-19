import connect from '../../common/database/connect';
import { Mongoose } from 'mongoose';
let connection: Mongoose = null;
beforeAll((done) => {
  connect('link-keeper-test')
    .then((res) => {
      console.log('banco conectado');
      connection = res;
      done();
    })
    .catch((pErr) => {
      done(pErr);
    });
});

afterAll((done) => {
  connection.connection.close().finally(done);
});
