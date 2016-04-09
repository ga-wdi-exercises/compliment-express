var express = require("express");

var app = express();

app.get("/", function(req, res){
  res.send("You're awesome!");
});

app.listen(3001, function(){
  console.log("App is alive!");
})
