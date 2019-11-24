const createFakeBookmarks = require('../helpers/createFakeBookmarks')
describe('bookmark api', () => {
  let bookmarks = null
  beforeAll(async () => {
    bookmarks = await createFakeBookmarks(20)
  })
  it('should get all bookmarks', (done) => {
    global.request
      .get('/bookmarks')
      .set(global.commonHeaders)
      .end((pErr, res) => {
        expect(res.status).toBe(200)
        expect(Array.isArray(res.body.data)).toBeTruthy()
        done()
      })
  })
  it('should get a bookmark by id', (done) => {
    global.request
      .get('/bookmarks/' + bookmarks[0]._id)
      .set(global.commonHeaders)
      .end((pErr, res) => {
        expect(res.status).toBe(200)
        expect(res.body.data._id).toBe(bookmarks[0]._id.toString())
        done()
      })
  })
  it('should create a new bookamark', (done) => {
    global.request
      .post('/bookmarks/')
      .set(global.commonHeaders)
      .send({ title: 'TESTE TITLE', link: 'http://www.google.com', domain: 'google' })
      .end((pErr, res) => {
        expect(res.status).toBe(200)
        expect(res.body.data.title).toBe('TESTE TITLE')
        done()
      })
  })
  it('should update a new bookamark', (done) => {
    global.request
      .put('/bookmarks/' + bookmarks[0]._id)
      .set(global.commonHeaders)
      .send({ title: 'TESTE UPDATE', link: 'http://wwww.google.com', domain: 'youtube' })
      .end((pErr, res) => {
        expect(res.status).toBe(200)
        expect(res.body.data.title).toBe('TESTE UPDATE')
        done()
      })
  })
  it('should remove a bookmark', (done) => {
    global.request
      .delete('/bookmarks/' + bookmarks[0]._id)
      .set(global.commonHeaders)
      .end((pErr, res) => {
        expect(res.status).toBe(200)
        expect(res.body.data).toBe(true)
        done()
      })
  })
})
