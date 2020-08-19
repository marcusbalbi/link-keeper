const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.use((req, res, next) => {
  const authorization = req.headers.authorization || req.query.authorization;
  req.user = jwt.verify(authorization, process.env.LINK_ENCRYPT_KEY);
  next();
});
router.get('/', function (req, res, next) {
  res.json({ data: true });
});

module.exports = router;
