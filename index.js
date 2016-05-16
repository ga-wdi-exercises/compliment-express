var express    = require("express");
var hbs        = require("express-handlebars");
var mongoose   = require("./data/connection")
var color      = require("randomcolor")

var app        = express();

var Compliment = mongoose.model("Compliment")

var functions  = {
  randomColor : function(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + "," + g + "," + b + ")";
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
  Compliment.find({}).then(function(compliments){
    res.render("app-index",{
      backgroundColor: functions.randomColor(),
      compliments: compliments[Math.floor(Math.random() * compliments.length)]
  })
  })
})

//function from 'randomcolor' module
app.get("/color/:color", function(req, res){
  Compliment.find({}).then(function(compliments){
    res.render("app-index",{
      backgroundColor: color.randomColor({
        hue: req.params.color,
        luminosity: 'bright'
      }),
      compliments: compliments[Math.floor(Math.random() * compliments.length)]
  })
  })
})

app.get("/:name", function(req, res){
  Compliment.find({}).then(function(compliments){
    res.render("app-index-name",{
      backgroundColor: functions.randomColor(),
      compliments: compliments[Math.floor(Math.random() * compliments.length)],
      getName: req.params.name
  })
  })
})

app.listen(3001, function(){
  console.log("🦄 Magical");
})
