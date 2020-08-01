import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  login: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String,
    select: false
  }
})

const User = mongoose.model('users', schema)

module.exports = User
