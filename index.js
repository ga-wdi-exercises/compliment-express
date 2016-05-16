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
app.use("/assets", express.static("public"))

app.get("/", function(req, res){
  res.render("app-random", {
    compliment: db.compliments[Math.floor(Math.random()*db.compliments.length)],
    bkg: db.colors[Math.floor(Math.random()*db.colors.length)]
  })
});

app.get("/:name", function(req, res){
  var name = req.params.name;
  res.render("app-random", {
    compliment: db.compliments[Math.floor(Math.random()*db.compliments.length)],
    complimentee: name,
    bkg: db.colors[Math.floor(Math.random()*db.colors.length)]
  })
});

app.listen(3001, function(){
  console.log("It's alive!");
});
