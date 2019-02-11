var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send("Hello World! I'm Application-1 ");
});
app.listen(3001, function () {
  console.log('Im listening on port 3001!');
});