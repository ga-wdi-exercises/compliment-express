var express     = require("express");   // makes the app load the dependency Express
var app         = express();                // makes the app actually run Express
var hbs         = require("express-handlebars");
var colors      = require("./db/colors");            // retrieves arrays of colors and
var compliments = require("./db/compliments");    // compliments from these files
// var mongoose    = require("./db/connection")

function randPick(arr) {               // Randomly picks a whole integer based on the
  var pick = Math.floor(Math.random() * arr.length);   // length of the array passed in.
  return arr[pick];
}

function get_random_color() {      // Found this on Stack Overflow
    var letters = 'ABCDE'.split('');   // Uses these letters to generate light color values
    var color = '#';                // sets '#' to append later to the returned string
    for (var i=0; i<3; i++ ) {      // cycles through the following line three times
        color += letters[Math.floor(Math.random() * letters.length)];
    }                           // the line above picks one of the five letter values
    return color;         // returns a three-'digit' hex color, such as #abc, to use below.
}

app.set('view engine', 'hbs');
app.engine('.hbs', hbs({        // configures Handlebars.  Threw an error, though,
  extname:        ".hbs",       // when I had required simply "handlebars" in line 3.
  partialsDir:    "views/",
  layoutsDir:     "views/",     // These tell the app where to find partial views and layouts.
  defaultLayout:  "layout-main.hbs",
}))

app.get("/", function(req, res){     // directs the app to do something at the '/' path
  // res.send("dog");                  // displays "dog" in the browser view.
  var randColor = get_random_color()    // chooses totally randomly from function above
  // var randColor = randPick(colors)   // chooses randomly from colors.js file
  var randComp  = randPick(compliments)
  res.render("index", {
    randColor: randColor,
    randComp:  randComp
  });
});

app.listen(4444, function(){     // makes the app listen to port 4444 from the browser
  console.log("it works");      // at the moment, it works: http://127.0.0.1:4444/ and
});                             // it shows "it works" in the terminal running nodemon.
