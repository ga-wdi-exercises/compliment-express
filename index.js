const express = require("express");
const app = express();
var bodyParser = require("body-parser")
var color = require("./models/color")
var compliments = require("./models/compliments")

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

function getRandomCompliments(module){
  var randomNum = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}

app.get ("/", function(req, res){
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomColor(colors);
  res.render("index.hbs", {compliment: randomCompliment, color: randomColor});
})

app.get ("/:name", function (req, res){
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomColor(colors);
  var name = req.params.name;
  res.render("name.hbs", {compliment: randomCompliment, color: randomColor, name: name});
})

app.post("/:name/new", function(req, res){
  compliments.push(req.body.name);
  var name = req.params.name;
  res.redirect('/' + name);
})


}
app.listen(3001, () => {
  console.log("app listening at http://localhost:3001/");
});
