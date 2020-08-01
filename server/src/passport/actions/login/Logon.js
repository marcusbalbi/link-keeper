const User = require('../../database/User')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')

module.exports = async (pLogin, pPassword) => {
  const conditions = {
    login: pLogin,
    password: crypto.SHA1(pPassword).toString()
  }
  const user = await User.findOne(conditions)
  return user ? jwt.sign({ user }, process.env.LINK_ENCRYPT_KEY, {
    expiresIn: '1h'
  }) : false
}
