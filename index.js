var express  = require("express");
var hbs      = require("express-handlebars");
var comdata  = require("./db/seeds.json");
var app      = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:       ".hbs",
  partialsDir:   "views/",
  layoutsDir:    "views/",
  defaultLayout: "layout-main"
}));

app.use("/assets", express.static("public"));

function RandomCompliment(){
  randNum = comdata[Math.floor((Math.random() * comdata.length) + 1)]['comdata.ment'];
}

app.get("/", function(req, res){
  res.render("app-compliment", {
    compliments: comdata
  });
});

app.listen(3001, function(){
  console.log("It's aliiive!");
});



colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
