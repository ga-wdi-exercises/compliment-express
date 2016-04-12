var express = require("express");
var hds     = require("express-handlebars");
var db      = require("./db/connection");
var app = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:    ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.use("/compliments", express.static("public"));
app.get("/", function(req, res){
  res.render("app-welcome");
});

app.get("/compliments", function(req, res){
  res.render("compliments-index",{
candidates: db.candidates
  });
});

app.get("/compliments/:name", function(req, res){
  var data = {
    name: req.params.name
  }
  res.render("compliments-show", {
    compliments: data
  });
});


app.listen(3001, function(){
  console.log("It's aliiive");
});
