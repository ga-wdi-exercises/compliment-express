var express = require("express");
var app = express();

app.get('/', function(req, res){
  res.send("You're forgiven!!")
})


app.listen(3001, function(req, res){
  console.log("It's working");
})
