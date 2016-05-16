var express = require("express");
var hbs = require("express-handlebars");
var db = require("./db/connection");
var parser = require("body-parser");

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
app.use(parser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.render("app-welcome",{
    randomComplement: db.complements[getRandomInt(0,db.complements.length-1)],
    randomColor: db.colors[getRandomInt(0,db.colors.length-1)]
  });
});

app.post("/", function(req, res){
  var name = req.body.first;
  res.render("app-welcome",{
    randomComplement: db.complements[getRandomInt(0,db.complements.length-1)],
    randomColor: db.colors[getRandomInt(0,db.colors.length-1)],
    name: name
  });
});

app.listen(3001, function(){
  console.log("It's aliiiiiiiiice!");
});


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
