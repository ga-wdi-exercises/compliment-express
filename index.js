var express = require("express");
var parser  = require("body-parser");
var hbs     = require("express-handlebars");
var db      = require("./db/connection");

var app     = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.use("/assets", express.static("public"));

app.use(parser.urlencoded({extended: true}));

function chooseRandom(array){
  var randomized = array[Math.floor(Math.random() * array.length)];
  return randomized;
}

// routes and controllers
app.get("/", function(req, res){
  res.render("app-welcome");
});

app.get("/compliment", function(req, res){
  var randomCompliment = chooseRandom(db.myCompliments);
  res.render("compliment-index", {
    compliment: randomCompliment
  });
});

app.get("/compliment/:name", function(req, res){
  var randomCompliment = chooseRandom(db.myCompliments);
  res.render("compliment-name", {
    name: req.params.name,
    compliment: randomCompliment
  });
});

app.post("/compliment", function(req, res){
  // this passes in the name stored in req.body as an argument to .create
  db.myCompliments.push(req.body.name);
});

app.listen(3001, function(){
  console.log("it's aliiiiive!");
});
