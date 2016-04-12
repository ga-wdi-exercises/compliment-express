var express     = require("express");
var hbs         = require("express-handlebars");
var db          = require("./db/connection");
// var compliments = require("./models/compliments")

var app         = express();

app.set("port", process.env.PORT || 3001);

app.set("view engine", "hbs");
app.engine(".hbs",hbs({
  extname:      ".hbs",
  partialsDir:  "views/",
  layoutsDir:   "views/",
  defaultLayout: "layout-main"
}));

app.use("/assets", express.static("public"));

function getRandomItem(arrayOfItems){
  var randomIndex = Math.floor((Math.random() * arrayOfItems.length));
  var randomInstance = arrayOfItems[randomIndex];
  return randomInstance;
}

app.get("/", function(req, res){
  res.render("welcome-compliment");
});

app.get("/compliments", function(req,res){
  var randomCompliment = getRandomItem(db.compliments);
  res.render("compliments-index",{
    compliment: randomCompliment // e.g.  {"body":"a compliment"}
    // compliments: db.compliments
  });
});


app.listen(app.get("port"), function(){
  console.log("It's Aliiiive!");
});
