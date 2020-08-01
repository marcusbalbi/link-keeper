const { mongoose } = require('./connection')
const crypto = require('crypto-js')

const schema = new mongoose.Schema({
  title: {
    type: String
  },
  link: {
    type: String,
    set: value => {
      return crypto.AES.encrypt(value, process.env.LINK_ENCRYPT_KEY)
    },
    get: value => {
      return crypto.AES.decrypt(value, process.env.LINK_ENCRYPT_KEY).toString(crypto.enc.Utf8)
    }
  },
  domain: {
    type: String
  }
}, { toJSON: { getters: true, setters: true } })

const Bookmark = mongoose.model('bookmarks', schema)

module.exports = Bookmark
