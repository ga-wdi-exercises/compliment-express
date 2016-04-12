var express = require("express");
var hbs = require("express-handlebars");

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you",
  "You're a monster",
  "Ain't found a way to kill me yet",
  "Holy diver, you've been down too long in the midnight sea"
];

function randomize (array){
  randomElement = array[Math.floor(Math.random()*array.length)];
  return randomElement;
}

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
  var randomCompliment = randomize(compliments);
  res.render("app-home", {
    compliment: randomCompliment,
  });
});

app.get("/:name", function(req, res){
  var randomCompliment = randomize(compliments);
  res.render("name-view", {
    name: req.params.name,
    compliment: randomCompliment,
  });
});

app.post("/:name/new", function(res, req){
  console.log(req.params);
  res.redirect("/" + req.params.name);
});

app.listen(3001, function(){
  console.log("Nodemon running");
});
