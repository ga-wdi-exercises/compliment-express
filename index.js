var express = require("express");
var hbs = require("express-handlebars");
var db = require("./db/connection");

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
  var randComp1 = db.compliments[Math.floor(Math.random() * db.compliments.length)];
  var randCompX = db.compliments[Math.floor(Math.random() * db.compliments.length)];
  var randComp2;
  if (randComp1 != randCompX) {
    randComp2 = randCompX;
  } else {
    randComp2 = db.compliments[Math.floor(Math.random() * db.compliments.length)];
  }
  res.render("app-landing", {
    comps: db.compliments,
    randComp1: randComp1,
    randComp2: randComp2
  });
});

app.listen(3001, function(){
  console.log("App is alive!");
});
