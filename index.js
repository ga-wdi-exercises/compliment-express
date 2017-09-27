var express     = require("express");
var mongoose    = require("./db/connection");
var compliments = require("./controllers/complimentry.js");
var colors      = require("./controllers/color.js");
var hbs         = require("express-handlebars");
// configure app to use body parser
var parser  = require("body-parser")
var app         = express()
var Compliment = mongoose.model("Compliment")


app.set("view engine", "hbs");
app.set("port", process.env.PORT || 3001);

app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout"
}));

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({
  extended: true
}));

function getComplimentColor(module){

  compliment=compliments[Math.floor(Math.random() * compliments.length)]
  color=colors[Math.floor(Math.random() * colors.length)]
}

app.get("/", function(req, res){
    getComplimentColor()

    res.render("index", {compliment,color});
  });

//list of all compliments
  app.get("/compliments", function(req, res){
      Compliment.find({}).then(compliments => {
        res.render("index", {
          compliments: compliments
        });
      });
    });

//personalized compliments
  app.get("/:name", function(req,res) {
    getComplimentColor()
    var name = req.params.name
    res.render("show",{name,compliment,color});
  });

//add a new compliment
  app.post('/compliments', function(req, res) {
  Compliment.create(req.body.compliment).then(function(compliment){
    res.redirect('/compliments')
  });
});




app.listen(3001, () => {
  console.log("It's aliiive!");
});
