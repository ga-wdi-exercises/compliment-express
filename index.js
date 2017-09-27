var express = require('express');
var app = express();
var parser = require('body-parser');
var colors = require('./models/color.js');
var compliments = require('./models/compliment.js')

app.use(parser.urlencoded({extended:true}));

//tells you what localhost to put in url
app.set("port", process.env.PORT || 3000);
app.set('view-engine', 'hbs');

//the default page
app.get("/", function (req, res){
  var randColor = colors[Math.floor(Math.random()*colors.length)]; //randome generator
  var randCompl = compliments[Math.floor(Math.random()*compliments.length)]; //random generator
  res.render("index.hbs", {compliment: randCompl, color: randColor}); // setting declared variables to local variables(like this.)
});

//will happen if you put a name in the url
app.get("/:name", function (req, res){
  var randColor = colors[Math.floor(Math.random()*colors.length)]; //random generator
  var randCompl = compliments[Math.floor(Math.random()*compliments.length)]; //random generator
  var name = req.params.name;
  res.render("name.hbs", {compliment: randCompl, color: randColor, name:name}); //setting declared variables to local variables(like this.)
});

app.post("/:name/compliment", function(req, res){
  compliments.push(req.body.name);
  res.redirect('/' + req.params.name);
});

//in cli, will tell you 3000 is open, meaning nothing is wrong
app.listen(app.get("port"), function(){
  console.log("3000 is open");
});
