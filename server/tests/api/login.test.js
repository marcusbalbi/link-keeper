// const request = require('supertest')
const createFakeUser = require('../helpers/createFakeUsers')
const jwt = require('jsonwebtoken')

describe('Login api', () => {
  let users = null
  beforeAll(async (done) => {
    users = await createFakeUser(1)
    done()
  })
  it('should login correclty', (done) => {
    const data = { login: users.data[0].login, password: users.raw[users.data[0].email].password }
    global.request.post('/login')
      .send(data)
      .end((pErr, res) => {
        expect(res.status).toBe(200)
        let data = jwt.decode(res.body.data)
        expect(data.user.email).toEqual(users.data[0].email)
        expect(data.user.login).toEqual(users.data[0].login)
        expect(data.user.password).toEqual(undefined)
        done()
      })
  })
})
