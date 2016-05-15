var express = require("express");
var hbs = require("express-handlebars");
var db = require("./db/connection");

var app = express();

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:".hbs",
  partialsDir:"views/",
  layoutsDir:"views/",
  defaultLayout: "layout-main"
}));
app.use("/assets", express.static("public"));

app.get("/", function(req, res){
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var randomComplement = db.complements[getRandomInt(0,db.complements.length-1)];
  var randomColor = db.colors[getRandomInt(0,db.colors.length-1)];
  res.render("app-welcome",{
    randomComplement: randomComplement,
    randomColor: randomColor
  });
});

app.listen(3001, function(){
  console.log("It's aliiiiiiiiice!");
});
