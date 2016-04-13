var express = require("express");
var app = express();
var compliments = require("./models/compliment");
var colors = require("./models/color");
var bodyParser = require("body-parser");

app.set("view engine","hbs");
app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function( req, res ){
  //display a generic greeting and a randomly chosen compliment. Th    e background color of the app should be randomized as well

  // create random index
  var compRandomIndex = Math.floor(Math.random() * compliments.length);
  var colRandomIndex = Math.floor(Math.random() * colors.length);
  // on button click, change compliment

  res.render("index", {
    compliment: compliments[compRandomIndex],
    color: colors[colRandomIndex]
  });
});

app.post("/", function(req, res) {
  compliments.push(req.body.compliment);
  res.redirect("/");
});

app.get("/:name", function(req, res) {
  // create random index
  var compRandomIndex = Math.floor(Math.random() * compliments.length);
  var colRandomIndex = Math.floor(Math.random() * colors.length);
  // on button click, change compliment

  res.render("show", {
    compliment: compliments[compRandomIndex],
    color: colors[colRandomIndex],
    name: req.params.name
  });
});


app.listen(3001, function(){
  console.log("app listening at http://localhost:3001/");
});
