var express = require("express");
var hbs = require("express-handlebars");
var db = require("./db/connection")

var app = express();
// var compliments = require("./seeds")
// var Compliment = mongoose.model("Compliment")

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs")

app.engine(".hbs", hbs ({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir:"views/",
  defaultLayout: "layout-main"
}));

app.use("/assets", express.static("public"))

app.get("/", function(req, res){
    res.render("compliment-index", {
      compliments: db.compliments
  });
});

app.listen(3001, function(){
  console.log("We are in business people!");
});
