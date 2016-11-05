var express = require("express");
var path = require('path')
var app = express();


app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, 'public')));


var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

var getCompliment =function () {
var idx  = Math.floor(Math.random() * compliments.length);
return(compliments[idx]);
}

var getColor =function () {
var idx  = Math.floor(Math.random() * colors.length);
return(colors[idx]);
}


app.listen(3000, () => {
  console.log("app listening on port 3000");
});

// app.git ("/:name", (req,res) => {
//   console.log(req.params.name)
// let color = getColor();
// let str=getCompliment();
// var name = req.params.name
// res.render("name", {name,str,color});
// });


app.get("/:id", (req, res) => {
  id=req.params.id
  console.log(req.params.id)
  let color = getColor();
  let str=getCompliment();
  res.render("name", {id,str,color});
});
