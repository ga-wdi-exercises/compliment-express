var express = require('express');
var app = express();
app.listen(8008);
app.get('/', function(req, res){
  res.send('hello world');
});
app.get("/compliment",function(req,res){
  res.send("compliment");
})
