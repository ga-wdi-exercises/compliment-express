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
  var compliments = db.compliments;
  var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];
  res.render("app-home", {
    compliment: randomCompliment,
  });
});

app.listen(3001, function(){
  console.log("Nodemon running");
});
