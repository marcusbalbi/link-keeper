const Bookmark = require('../../database/Bookmark')
const faker = require('faker')
module.exports = async (amount) => {
  let bookmarks = []
  for (let i = 0; i < amount; i++) {
    let bookmark = {
      title: faker.name.title(),
      link: faker.internet.url(),
      domain: faker.internet.domainName()
    }
    bookmarks.push(await Bookmark.create(bookmark))
  }
  return bookmarks
}
