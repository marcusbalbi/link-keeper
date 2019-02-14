const request = require('supertest')
describe('bookmark api', () => {
  it('should get all bookmarks', (done) => {
    request(global.app).get('/bookmarks')
      .end((pErr, res) => {
        expect(res.status).toBe(200)
        expect(Array.isArray(res.body.data)).toBeTruthy()
        done()
      })
  })
  // it('should get a bookmark by id')
  // it('should create a new bookamark')
  // it('should remove a bookmark')
})
