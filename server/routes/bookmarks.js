const express = require('express')
const router = express.Router()
const Bookmark = require('../database/Bookmark')

const prefix = '/bookmarks'

router.get(`${prefix}/`, function (req, res, next) {
  Bookmark.find({}).then((list) => {
    res.json({ data: list })
  })
})

router.get(`${prefix}/:id`, function (req, res, next) {
  Bookmark.findById(req.params.id).then((bookmark) => {
    res.json({ data: bookmark })
  })
})

router.post(`${prefix}/`, function (req, res, next) {
  Bookmark.create(req.body).then((created) => {
    res.json({ data: created })
  })
})
router.put(`${prefix}/:id`, function (req, res, next) {
  Bookmark.findById(req.params.id).then(doc => {
    doc.$set(req.body).save().then(data => res.json({ data }))
  })
})
router.delete(`${prefix}/:id`, function (req, res, next) {
  Bookmark.findByIdAndDelete(req.param('id')).then((result) => {
    res.json({ data: true })
  })
})

module.exports = router
