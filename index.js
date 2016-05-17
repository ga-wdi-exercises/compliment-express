var express = require("express");
var hbs = require("express-handlebars");
// var db = require("./db/connection");
var app = express();

var colors = require("./models/colors.js")
var compliments = require("./models/compliments.js")

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));
//
app.use("/assets", express.static("public"));

function randPick(array){
  var pick = Math.floor(Math.random() * array.length);
  return array[pick];
}

app.get("/", function(req, res) {
  res.render("index.hbs", {
    randColor: randPick(colors),
   randCompli: randPick(compliments)
  });
});

app.listen(3001, function() {
  console.log("Its aliiivee");
});
