var express = require("express");
var hbs = require("express-handlebars");
var db = require("./db/connection");
var random = require("./random");

var app = express();

app.set("view engine", "hbs");

app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.use("/assets", express.static("public"));





app.get("/", function(req, res){
  // res.render("app-welcome");
  var randoComp = random(db.compliments);
  var randoColor = random(db.colors);
  res.render("compliments-index", {
    compliments: randoComp,
    colors: randoColor
  });
});

app.get("/compliments", function(req, res){
  res.render("compliments-index", {
    compliments: db.compliments
  });
});

app.get("/compliments/:compliment", function(req, res){
  var desiredMessage = req.params.compliment;
  var complimentOutput;
  db.compliments.forEach(function(compliment){
    if(desiredMessage === compliment.compliment){
      complimentOutput = compliment;
    }
  });
  res.render("compliments-show", {
    compliment: complimentOutput
  });
});

app.listen(3001, function(){
  console.log("It's aliiiive!");
});
