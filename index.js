var express = require("express");
var hbs = require("express-handlebars");
var db = require("./db/connection");

var app = express();

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialDir:     "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));

app.get("/", function(req, res){
  res.render("app-welcome");
});

app.get("/compliments", function(req, res){
  res.render("compliments-index", {
    compliments: db.compliments
  });
});

app.get("/compliments/:name", function(){
  var desiredName = req.params.name;
  var complimentOutput;
  db.compliments.forEach(function(compliment){
    if (desiredName === compliment.name){
      complimentOutput = compliment;
    }
  });

  res.render("compliments-show", {
    compliment: complimentOutput
  });
});

app.listen(app.get("port"), function(){
  console.log("Look at me, I work!!!!");
});
