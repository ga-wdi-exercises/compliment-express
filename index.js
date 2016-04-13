var express = require("express");
var hbs = require("express-handlebars");
var db = require("./db/connection");

var app = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.use("/assets", express.static("public"));

function getCompliment(){
  var randomCompliment = db.compliments[Math.floor(Math.random() * db.compliments.length)];
  return randomCompliment
}

app.get("/", function(req, res){
  var randomCompliment = getCompliment();
  res.render("app-welcome", {
    compliment: randomCompliment,
  });
});

app.listen(3001, function(){
  console.log("It's aliiive!");
});
