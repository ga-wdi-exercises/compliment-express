var express = require("express");
var hbs = require("express-handlebars")
var db = require("./db/connection");
var app = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.use("/assets", express.static("public"));

function getCompliment(){
  var rendomCompliment = db.compliments[Math.floor(Math.random()*db.compliments.length)];
  return rendomCompliment
}

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

function getRandomColor(){
  var randomColor = colors[Math.floor(Math.random()*colors.length)];
  return randomColor
}


app.get("/", function(req, res){
  var rendomCompliment = getCompliment();
  var randomColor = getRandomColor();
  res.render("app-welcome", {
    compliment: rendomCompliment,
    color: randomColor
  });
});

app.get("/:name", function(req, res){
  var name = req.params.name
  var rendomCompliment = getCompliment();
  var randomColor = getRandomColor();
  res.render("personal-compliment", {
    compliment: randomCompliment,
    color: randomeColor,
    name: name
  })
})

app.listen(3001, function(){
  console.log("It's aliiive");
});
