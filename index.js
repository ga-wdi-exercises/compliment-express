var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("suh dude");
});

app.listen(1337, function(){
  console.log("app listening on port 1337 skeet skeet");
})
