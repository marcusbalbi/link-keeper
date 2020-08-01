const express = require('express')
const router = express.Router()
const Logon = require('../actions/login/Logon')

const prefix = '/login'

router.post(`${prefix}/`, async function (req, res, next) {
  const { login, password } = req.body
  const token = await Logon(login, password)
  res.status(200).json({ data: token })
})

module.exports = router
