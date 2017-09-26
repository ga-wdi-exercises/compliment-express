var express = require('express');
var app = express();
var parser = require('body-parser');
var colors = require('./models/color.js');
var compliments = require('./models/compliment.js')

app.use(parser.urlencoded({extended:true}));
app.set("port", process.env.PORT || 3000);
app.set('view-engine', 'hbs');

app.get("/", function (req, res){
  var randColor = colors[Math.floor(Math.random()*colors.length)];
  var randCompl = compliments[Math.floor(Math.random()*compliments.length)];
  res.render("index.hbs", {compliment: randCompl, color: randColor});
});

app.get("/:name", function (req, res){
  var randColor = colors[Math.floor(Math.random()*colors.length)];
  var randCompl = compliments[Math.floor(Math.random()*compliments.length)];
  var name = req.params.name;
  res.render("name.hbs", {compliment: randCompl, color: randColor, name:name});
});

app.listen(app.get("port"), function(){
  console.log("3000 is open");
});
