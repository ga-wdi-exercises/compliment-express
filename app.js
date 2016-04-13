var express = require('express');
var app = express();
app.set("view engine", "hbs");
app.use(express.static('public'));

var compliments = [
  "Your are super flippin kewt",
  "Dig your shirt",
  "GOALS AF",
  "Marry me?",
  "Peace 2 U 4 U R A QT"
]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

names = [
  "Harry",
  "Jerry",
  "Mary",
  "Larry",
  "Barry"
]

  app.get("/", function(req, res){
    var index = Math.floor(Math.random() * compliments.length);
    var colorIndex = Math.floor(Math.random() * colors.length);
    res.render("index", {
      compliment: compliments[index],
      color: colors[colorIndex]
    });
  })
  app.listen(3001, function(){
    console.log("HELP")
  });
