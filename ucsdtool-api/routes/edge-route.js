var express = require('express');
var router = express.Router();

router.post('/p', function(req, res, next) {
  console.log("body: " + req.body);
  console.log("query: " + req.query);
});

router.get('/:dept', function(req, res, next) {
  //Do Something
  console.log(req.params.dept);
  res.send("Edge from department: " + req.params.dept);
});

router.get('/', function(req, res, next) {
  console.log("all");
  res.send("All Edges");
});



module.exports = router;
