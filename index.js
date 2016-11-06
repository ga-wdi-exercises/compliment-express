var express = require("express")
var app = express()
app.set("view enginer", "hbs");
app.use(express.static(__dirname + '/public'))
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get("/", function(req, res){
  var compliment = compliments[Math.floor(Math.random() * compliments.length)];
  var color = colors[Math.floor(Math.random() * colors.length)];
  res.render("index.hbs", {compliment: compliment, color: color})
})

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

app.listen(2000, () =>{
  console.log("app listening at http://localhost:2000/")
});
