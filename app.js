var express     = require('express');
var app         = express();
var hbs         = require('express-handlebars')
var colors      = require('./models/colors')
var compliments = require('./models/compliments')

function randPick(arr) {
  var pick = Math.floor(Math.random() * arr.length);
  return arr[pick];
}

app.set('view engine', 'hbs');
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main",
}))

app.get('/', function(req,res){
  var randColor = randPick(colors)
  res.render('index.hbs', {
    pizza: "I love pizza",
    randColor: randColor,
    randCompli: randPick(compliments)
  });
});

app.listen(4444, function(){
  console.log("yipee");
})
