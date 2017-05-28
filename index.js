const express = require("express");
const app = express();
const compliments = require("./models/compliment")
const colors = require("./models/color")
const bodyParser = require("body-parser");

app.use(bodyParser.json()); //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })); // handles form submissions


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

app.get("/:name", function(req, res){
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomCompliments(colors);
  var name = req.params.name;
  res.render("name.hbs",{compliment: randomCompliment, color: randomColor, name: name});
});


app.post("/:name/new", function(req, res){
  compliments.push(req.body.name);
  var name = req.params.name;
  res.redirect('/' + name);
});


app.listen(4000, () => {
  console.log("app listening on port 4000")
});
