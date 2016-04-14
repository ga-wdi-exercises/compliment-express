var express = require("express");
var hbs     = require("express-handlebars");
var db      = require("./seeds.json");

var app = express();

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        "hbs",
  layoutsDir:     "views",
  defaultLayout: "layout-main"
}));

app.get("/", function(res, req) {
  var compliment = db.compliments[Math.floor(Math.random() *
                                  db.compliments.length)];
  var color      = db.colors[Math.floor(Math.random() *
                             db.compliments.length)];
  res.render("compliments-welcome", {
    compliment: compliment,
    color:       color
  });
});
