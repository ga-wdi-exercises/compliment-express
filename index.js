var express     = require("express");
var hbs         = require("express-handlebars");
var db          = require("./db/connection");
var compliments = require("./models/compliments")

var app         = express();

app.set("port", process.env.PORT || 3001);

app.set("view engine", "hbs");
app.engine(".hbs",hbs({
  extname:      ".hbs",
  partialsDir:  "views/",
  layoutsDir:   "views/",
  defaultLayout: "layout-main"
}));

app.use("/assets", express.static("public"));

function getRandomCompliments(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}

app.get("/", function(req, res){
  res.render("welcome-compliment");
});

app.get("/compliments", function(req,res){
  var randomCompliment = getRandomCompliments(compliments);
  res.render("compliments",{
    compliment: randomCompliment,
    compliments: db.compliments
  });
});


app.listen(app.get("port"), function(){
  console.log("It's Aliiiive!");
});
