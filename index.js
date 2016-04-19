var express = require("express");
var hbs = require("express-handlebars");
var compliments = require("./db/compliments")
var colors = require("./db/colors")

var app = express();
// var compliments = require("./seeds")
// var Compliment = mongoose.model("Compliment")

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs")

app.engine(".hbs", hbs ({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir:"views/",
  defaultLayout: "layout-main"
}));
//
app.use("/assets", express.static("public"));

function randomQuotes (quote){
  var quoteIndex = Math.floor((Math.random()* quote.length));
  var quoteInstance = quote[quoteIndex];
  return quoteInstance;
};

app.get("/", function(req, res){
      var complimentIndex = randomQuotes(compliments);
      var colorIndex = randomQuotes(colors);
      res.render("compliment-index.hbs",  {compliment: complimentIndex, color: colorIndex});
      console.log(colorIndex)
  });

app.listen(3001, function(){
  console.log("We are in business people!");
});
