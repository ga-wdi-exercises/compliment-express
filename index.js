var express    = require("express");
var hbs        = require("express-handlebars");
var data       = require("./data/compliment")

var app        = express();

var functions  = {
  randomColor : function(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + "," + g + "," + b + ")";
  },
  randomIndex: function(){
    return Math.floor(Math.random() * data.length)
  }
};

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main",
}))

app.get("/", function(req,res){
  res.render("app-index",{
    backgroundColor: functions.randomColor(),
    compliments: data[functions.randomIndex()],
    getName: req.params.name
  })
})

app.get("/:name", function(req, res){
  res.render("app-index-name",{
    backgroundColor: functions.randomColor(),
    compliments: data[functions.randomIndex()],
    getName: req.params.name
  })
})

app.listen(3001, function(){
  console.log("🦄 Magical");
})
