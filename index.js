const express = require("express");
const app = express();
const compliments = require("./models/compliment")
const colors = require("./models/color")


app.set("view engine","hbs")
app.use(express.static(__dirname + '/public'));


function getRandomCompliments(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
  console.log(randomIndex);
}

app.get("/", function(req,res){
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomCompliments(colors);
  res.render("index", {compliment: randomCompliment, color: randomColor});
});




app.listen(4000, () => {
  console.log("app listening on port 4000")
});
