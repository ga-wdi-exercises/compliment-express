var express = require("express");
var hbs = require("express-handlebars");
var app = express();


app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
  // layout main is saying that it is being displayed globally, pointed at layout-main.hbs file
}));
// assets is looking in the public folder
app.use("/assets", express.static("public"));
// app-welcome is pointing to the app-welcome.hbs file and is being rendered inside layout-main due to the body handlebars
app.get("/", function(req, res){
  res.render("app-welcome");
});
app.get("/bye", function(req, res){
  res.render("app-bye");
});
app.listen(3001, function(){
  console.log("its alive");
});
