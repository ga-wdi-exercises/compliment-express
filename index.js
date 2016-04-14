var express = require("express");
var hbs = require("express-handlebars");
var db = require("./db/connection");
// db variable is being mapped to the directory and is being accessed below at     compliments: db.compliments

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

app.get("/compliments", function(req, res){
  res.render("compliments-index", {
    compliments: db.compliments
    // compliments could be named anything. it is looking at db variable and compliments is looking at compliments in connection.js file   compliments: seedData

  });
});

app.get("/bye", function(req, res){
  res.render("app-bye");
});
app.listen(3001, function(){
  console.log("its alive");
});
