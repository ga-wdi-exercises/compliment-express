var express = require("express");
var hbs = require("express-handlebars");

var app = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));
app.use("/public", express.static("public"));

app.get("/", function(req, res){
  res.render("app-welcome");
});

app.get("/:name", function(req, res){
  var data = {
      name: req.params.name
  }
  res.render("name-show", {
    randomNum: 100,
    name: data.name
  });
});

app.listen(3005, function(){
  console.log("IT'S ALIIIVE");
});
