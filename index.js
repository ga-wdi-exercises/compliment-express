var express = require("express");
var hbs = require("express-handlebars");
var mongoose = require("./db/connection")

var app = express();

var Compliment = mongoose.model("Compliment")

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
  Compliment.find({}).then(function(compliments){
    res.json(compliments)
    // res.render("compliment-index", {
    //   compliments: compliments
    // });
  });
});

app.listen(3001, function(){
  console.log("We are in business people!");
});
