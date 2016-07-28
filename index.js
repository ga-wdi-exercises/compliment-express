var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var compliments = require("./models/compliments")
var colors = require("./models/colors");


app.get("/", function(req, res){
  res.send("Hello World");
});

app.use(express.static(__dirname + "/public"));

app.listen(4000, function(){
  console.log("app listening on port 4000");
});
