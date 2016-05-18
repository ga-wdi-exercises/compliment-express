var express     = require("express");   // makes the app load the dependency Express
var app         = express();                // makes the app actually run Express
var hbs         = require("express-handlebars");
var colors      = require("./db/colors");            // retrieves arrays of colors and
var compliments = require("./db/compliments");    // compliments from these files
// var mongoose    = require("./db/connection")

app.set('view engine', 'hbs');
app.engine('.hbs', hbs({        // configures Handlebars.  Throwing an error, though.
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "/views/index.hbs",
}))

app.get("/", function(req, res){     // directs the app to do something at the '/' path
  // res.send("dog");                  // displays "dog" in the browser view.
  res.render("index");
});

app.listen(4444, function(){     // makes the app listen to port 4444 from the browser
  console.log("it works");      // at the moment, it works: http://127.0.0.1:4444/ and
});                             // it shows "it works" in the terminal running nodemon.
