var express = require("express");
var app = express();

app.listen(4000, function(){
});

app.get("/", function(req, res){
  res.send("Hello World");
});
