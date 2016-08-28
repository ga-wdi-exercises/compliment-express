var express = require("express");
var app = express();

var compliments = require("./controllers/compliments.js")
var bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public' ))

app.listen(4000,function(){
  console.log("app listening on port 4000")
})

app.get("/", compliments.index)
app.get("/form", function(req, res){
  res.render("welcome");

})


app.post("/:name", function(req, res){
  var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ];

  compliments.push(req.body.player_compliment);

  var compliment = compliments[Math.floor(Math.random()*compliments.length)]

  colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

  var color = colors[Math.floor(Math.random()*colors.length)]

  res.render("index", {
    name: req.params.name,
    compliment: compliment,
    color: color
  })
})

app.get("/:name", function(req, res) {

  var compliments = [
"Your instructors love you",
"High five = ^5",
"Is it Ruby Tuesday yet?",
"It's almost beer o'clock",
"The Force is strong with you"
];

compliments.push(req.body.player_compliment);

var compliment = compliments[Math.floor(Math.random()*compliments.length)]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

var color = colors[Math.floor(Math.random()*colors.length)]

  res.render("index", {
    name: req.params.name,
    compliment: compliment,
    color: color
  })
})
