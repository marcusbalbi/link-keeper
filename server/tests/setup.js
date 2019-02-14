const app = require('../app')

global.app = app
const connection = require('../database/connection')
afterAll((done) => {
  connection.mongoose.disconnect().then(done)
})

beforeAll((done) => {
  connection.connect().then(() => done())
  // connection.connect()
  // .then(() => { done() })
  // .catch((pError) => { done(pError) })
})
