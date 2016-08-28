var express = require("express");
var app = express();
var compliments = require("./models/compliment");
var bodyParser = require("body-parser");
var colors = require("./models/color")


app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

function getRandomCompliments(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}


app.listen(4000, function(){
  console.log("Hey! App listening on port 4000");
});

app.get("/", function(req, res){
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomCompliments(colors);
  res.render("index.hbs", {compliment: randomCompliment, color: randomColor});
});

app.post("/", function(req, res){
  res.render("index", {
    player_name: req.body.player_name,
    compliment: compliment
  })
})
