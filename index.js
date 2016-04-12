var express     = require("express");
var hbs         = require("express-handlebars");
var db          = require("./db/connection");

var app         = express();

app.set("view engine", "hbs");
app.engine(".hbs",hbs({
  extname:      ".hbs",
  partialsDir:  "views/",
  layoutsDir:   "views/",
  defaultLayout: "layout-main"
}));

app.use("/assets", express.static("public"));

// function getRandomLove(compliments){
//   var loveIndex = Math.floor((Math.random()* compliments.length));
//   var loveInstance = compliments[LoveIndex];
//   return loveInstance;
//
// }

app.get("/", function(req, res){
  res.render("welcome-compliment");
});

app.get("/compliments", function(req,res){
  // var randomLove = getRandomLove(compliments);
  res.render("compliments",{
    compliments: db.compliments
  });
});


app.listen(3001, function(){
  console.log("It's Aliiiive!");
});
