var express = require("express");
var hbs = require("express-handlebars");
var parser = require("body-parser");
var db = require("./db/connection");

var app = express();

var Candidate = db.compliments;

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialDir:     "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.use(parser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render("app-welcome");
});


// index of compliments. Need to randomize
app.get("/compliments", function(req, res){
  res.render("compliments-index", {
    compliments: db.compliments
  });
});

// app.get("/compliments", function(req, res){
//   var compliments = db.compliments;
//   var randomCompliment = Math.floor(Math.random() * compliments.length);
//   res.render("compliments-index", {
//     compilment: db.compliments[randomCompliment]
//   });
// });

// app.post("/compliments", function(req, res){
//   res.json(req.body)
// })

// possibly for level 2
// app.get("/compliments/:name", function(){
//   var desiredName = req.params.name;
//   var complimentOutput;
//   db.compliments.forEach(function(compliment){
//     if (desiredName === compliment.name){
//       complimentOutput = compliment;
//     }
//   });

app.post("/compliments", function(req, res){
  Compliment.create(req.body.compliment).then(function(compliment){
    res.redirect("/compliments/" + candidate.name);
  });
});


app.listen(app.get("port"), function(){
  console.log("Look at me, I work!!!!");
});
