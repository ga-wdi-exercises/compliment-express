var express = require("express");   // makes the app load the dependency Express
var app = express();                // makes the app actually run Express
var colors = require("./db/colors");            // retrieves arrays of colors and
var compliments = require("./db/compliments");    // compliments from these files
var hbs = require("handlebars");
var mongoose = require("./db/connection")

app.get("/", function(req, res){     // directs the app to do something at the '/' path
  res.send("dog");                  // displays "dog" in the browser view.
});

app.listen(4444, function(){     // makes the app listen to port 4444 from the browser
  console.log("it works");      // at the moment, it works: http://127.0.0.1:4444/ and
});                             // it shows "it works" in the terminal running nodemon.
