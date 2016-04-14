var express = require("express"); // require is used for loading dependencies/modules. It looks for folder called "express" in node_modules file. var express is a function
//require is for loading something from another file
//module.exports is something inside a file that needs to be sent out
var app = express();

// requireing colors and compliments from the models folder
var compliments = require("./models/compliment.js");
var colors = require("./models/color.js");

/************ Things I tried that didn't really work (more for note taking)***/
var hbs = require("express-handlebars"); // always need to require dependencies so I can use them.
var db = require("./db/connection"); //use . at beginning when linking to a file you created.


app.use("/public", express.static("public"));
// when anyone goes to the /public URL look for items in the "public" folder. so its like public/CSS/style.css
app.set("view engine", "hbs"); // every express app has a view engine. In this case we will use hbs
app.engine(".hbs", hbs({ //.hbs is telling it to use .hbs
  extname: ".hbs", // saying to look for .hbs files in views folder
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));


app.get("/", function(req, res){
  // if you make app.get("/test") you need to go to /test to see things
  // .get is a get request.
  // req is request. represents all data coming in
  // res is response. Represents all data going out

  // also, you need to have a res.something on each route or else your page will keep loading until it timesout

  // code for randomizing color and compliments array should go in here.
  var randomColor = colors[Math.floor(Math.random()*colors.length)];
  var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];
  res.render("compliment", {complimentz: randomCompliment, colorz: randomColor});


  console.log(randomColor);
  console.log(randomCompliment);
});

app.get("/allcompliments",
function(req, res){
  res.render("allcompliments", { // anything you put in here HAS to be an object.
    compliments: db.compliments
  });
});

app.get("/allcompliments/:compliments", function(req, res){
  var desiredCompliment = req.params.compliments;
  var complimentOut;
  db.compliments.forEach(function(compliment){
    if(compliment.compliments == desiredCompliment){
      complimentOut = compliment;
    }
  });
  res.render("compliment-show", {
    compliments: complimentOut
  });
});

app.listen(3001, function(){
  console.log("I work");
});
