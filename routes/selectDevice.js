var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('selectDevice', {
    app: req.query.app,
    devices: ['one', 'two', 'three']
  });
});

module.exports = router;
