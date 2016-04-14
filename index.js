var express = require("express");
var app = express();
var hbs = require("express-handlebars");
var bodyParser = require('body-parser');
var compliments = require("./models/compliments.js")


app.set("view engine", "hbs");
app.use(bodyParser.json());

function complimentMe(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}

function getSomeCompliments(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}

app.get("/", function(req, res){
  var someCompliment = getSomeCompliments(compliments);
  res.render("index.hbs", {compliment: someCompliment});
});



app.listen(3001, function(){
  console.log("Houston we have lift off!");
});
