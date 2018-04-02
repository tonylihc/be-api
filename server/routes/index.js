var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    status: 'success',
    statusCode: 20000,
    message: 'reqest success'
  })
});

module.exports = router;
