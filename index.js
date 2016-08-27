var express = require("express");
var app = express();
var complimentsAndColors = require("./controllers/compliments.controller.js")


app.set("view engine", "hbs");

app.listen(4000, function() {
  console.log("app listening on port 4000");
})


function getRandomCompliment(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}
function getRandomColor(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}

app.get("/", function(req,res) {
  var randomCompliment = getRandomCompliment(complimentsAndColors.compliments);
  var randomColor = getRandomColor(complimentsAndColors.colors);

  res.render("index", {
    compliment: randomCompliment,
    color: randomColor
  })
})
