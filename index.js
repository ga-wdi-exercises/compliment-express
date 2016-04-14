var express = require("express");
var hbs = require("express-handlebars");
var db = require("./db/connection");
var app = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.use("/assets", express.static("public"));

app.get("/", function(req, res) {
  res.render("app-welcome", {
    compliments: db.compliments  //I can't get the embedded javascript to work on the view html.//
  });
});


app.listen(3001, function() {
  console.log("Working!");
});
