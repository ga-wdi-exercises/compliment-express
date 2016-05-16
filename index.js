var express    = require("express");
var parser     = require("body-parser")
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
app.set("port", process.env.PORT || 3001)
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main",
}))

app.use(parser.urlencoded({extended: true}))

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

app.get("/last", function(req,res){
  Compliment.find({}).then(function(compliments){
    res.render("app-index", {
      backgroundColor: functions.randomColor(),
      compliments: compliments[(compliments.length - 1)]
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

app.post("/", function(req, res){
  Compliment.create(req.body.compliment).then(function(){
    res.redirect("/last");
  })
})

app.listen(app.get("port"), function(){
  console.log("🦄 Magical");
})
