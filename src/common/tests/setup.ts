import connect from '../../common/database/connect';

beforeAll((done) => {
  connect('link-keeper-test')
    .then(() => {
      console.log('banco conectado');
      done();
    })
    .catch((pErr) => {
      done(pErr);
    });
});
