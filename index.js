var express = require("express");
var hbs = require("express-handlebars")
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

function getCompliment(){
  var rendomCompliment = db.compliments[Math.floor(Math.random()*db.compliments.length)];
  return rendomCompliment
}



app.get("/", function(req, res){
  var rendomCompliment = getCompliment();
  res.render("app-welcome", {
    compliment: rendomCompliment
  });
});


app.listen(3001, function(){
  console.log("It's aliiive");
});
