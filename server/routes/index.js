const express = require('express')
const router = express.Router()
const Bookmark = require('../database/Bookmark')

/* GET home page. */
router.get('/', function (req, res, next) {
  Bookmark.find({}).then((list) => {
    res.json({ data: list })
  })
})

module.exports = router
