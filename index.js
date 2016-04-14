var express =require("express");
var hbs =require("express-handlebars");
var app = express();
app.set("view engine", "hbs");
app.get("/", express.static("public"));

app.get("/", function(req, res){
  res.render("app-welcome");
});

app.listen(3001, function(){
  console.log("It's aliiive!");
});
function myCompliments(){

}
compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]
