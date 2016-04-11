var express = require('express');
var hbs = require('express-handlebars');
var db = require("./db/connection");

var app = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));
app.use("/public", express.static("public"));

app.get("/", function(req, res) {
  res.render("app-welcome", {
    compliment: db.compliments[Math.floor((Math.random() * db.compliments.length))],
    color: db.colors[Math.floor((Math.random() * db.colors.length))]
  });
});

app.listen(3001, function() {

});
