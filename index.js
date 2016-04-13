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
// app-welcome is point to the app-welcome.hbs file
app.get("/", function(req, res){
  res.render("app-welcome");
});
app.get("/bye", function(req, res){
  res.render("app-bye");
});
app.listen(3001, function(){
  console.log("its alive");
});
