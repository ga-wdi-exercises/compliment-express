var express  = require("express");
var hbs      = require("express-handlebars");
var comdata  = require("./db/seeds.json");
// var random_compfunc = require('./random');
var app      = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:       ".hbs",
  partialsDir:   "views/",
  layoutsDir:    "views/",
  defaultLayout: "layout-main"
}));

app.use("/assets", express.static("public"));

function RandomCompliment(mycomplimentsdata){
  var randomindex = Math.floor((Math.random() * mycomplimentsdata.length))
  console.log(randomindex);
  finalcompliment = mycomplimentsdata[randomindex];

  return finalcompliment;
}

app.get("/", function(req, res){
  finalcompliment = RandomCompliment(comdata);
  res.render("app-compliment", {
    compliments: finalcompliment["ment"]
  });
});

app.listen(3001, function(){
  console.log("It's aliiive!");
});



colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
