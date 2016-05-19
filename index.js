var express    = require("express");
var hbs        = require("express-handlebars");
var db         = require("./db/connection");
var bodyParser = require("body-parser");

var app     = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:       ".hbs",
  partialsDir:   "views/",
  layoutsDir:    "views/",
  defaultLayout: "layout-main"
}));

app.use("/assets", express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

function sample(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

app.get("/", function(req, res){
   res.render("app-welcome",{
     compliment: sample(db.compliments),
     color: sample(db.colors)
   });
});

app.get("/:name", function(req, res){
  res.render("name", {
    name: req.params.name,
    compliment: sample(db.compliments),
    color: sample(db.colors)
  });
});

app.post("/:name", function(req, res){
  res.render("name",{
    name: req.body.name,
    compliment: sample(db.compliments),
    color: sample(db.colors)
  });
});

app.listen(3001, function(){
});
