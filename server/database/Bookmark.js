const { mongoose } = require('./connection')

const schema = new mongoose.Schema({
  title: {
    type: String
  },
  link: {
    type: String
  },
  domain: {
    type: String
  }
})

const Bookmark = mongoose.model('bookmarks', schema)

module.exports = Bookmark
