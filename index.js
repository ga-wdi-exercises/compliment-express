var express = require("express");
var express = require("express-handlebars");
var db      = require("./db/connection");

var app = express();


app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialDir:     "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.get("/compliment", function(req, res){
  res.render("app-welcome");
});

app.use("/assets", express.static("public"));

app.listen(3001, function(){
  console.log("It's Aliiiiiive!");
});
