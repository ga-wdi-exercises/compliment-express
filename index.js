var express = require("express")
var hbs     = require("express-handlebars")
var params  = require("body-parser")
var app     = express()

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

function getRandomCompliments(compliments){
  var randomComplimentIndex = Math.floor(Math.random() * compliments.length)
  return compliments[randomComplimentIndex]
}

function getRandomColor(colors){
  var randomColorIndex = Math.floor(Math.random() * colors.length)
  return colors[randomColorIndex]
}


app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.get("/", function(req, res){
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomColor(colors)
  res.render("index", {
    compliment: randomCompliment,
    color: randomColor
  });
});

app.get("/:name", function(req, res){
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomColor(colors)
  res.render("show", {
    name: req.params.name,
    compliment: randomCompliment,
    color: randomColor
  })
})

app.post("/:name/new", function(req, res){
  compliments.push(params.compliment)
  var name = req.params.name
  res.redirect("/" + name )
})


app.listen(3001, function(){
  console.log("I'm alive")
});
