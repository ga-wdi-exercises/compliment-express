var express = require("express");   // makes the app load the dependency Express
var app = express();                // makes the app actually run Express
var hbs = require("handlebars");
var mongoose = require("./db/connection")

app.get("/", function(req, res){     // directs the app to do something at the '/' path
  res.send("dog");
});

app.listen(4444, function(){     // makes the app listen to port 4444 from the browser
  console.log("it works");
});
