import express from 'express';
import Bookmark from '@bookmarks/database/Bookmark';

const prefix = '/bookmarks';
const router = express.Router();

router.get(`${prefix}/`, function (req, res, next) {
  Bookmark.find({}).then((list) => {
    res.json({ data: list });
  });
});

router.get(`${prefix}/:id`, function (req, res, next) {
  Bookmark.findById(req.params.id).then((bookmark) => {
    res.json({ data: bookmark });
  });
});

router.post(`${prefix}/`, function (req, res, next) {
  const { title, link, domain } = req.body;
  Bookmark.create({ title, link, domain }).then((created) => {
    res.json({ data: created });
  });
});
router.put(`${prefix}/:id`, function (req, res, next) {
  Bookmark.findById(req.params.id).then((doc) => {
    doc
      .set(req.body)
      .save()
      .then((data) => res.json({ data }));
  });
});
router.delete(`${prefix}/:id`, function (req, res, next) {
  Bookmark.findByIdAndDelete(req.param('id')).then((result) => {
    res.json({ data: true });
  });
});

export default router;
