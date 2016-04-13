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
  var randomindex = Math.floor((Math.random() * mycomplimentsdata.length));
  finalcompliment = mycomplimentsdata[randomindex];

  return finalcompliment;
}


function RandomColor(){
  var color = "#";
  letternums = ["FFBF00", "0080FF","01DF3A","FF0080"];
  color = color + letternums[Math.floor(Math.random() * letternums.length)];
  return color;
}

app.get("/", function(req, res){
  finalcompliment = RandomCompliment(comdata);
  finalcolor = RandomColor();
  console.log(finalcolor);
  res.render("app-compliment", {
    compliments: finalcompliment["ment"],
    color: finalcolor
  });
});

app.listen(3001, function(){
  console.log("It's aliiive!");
});

RandomColor();
