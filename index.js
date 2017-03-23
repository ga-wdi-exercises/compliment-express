const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const compliments = require("./models/compliment")
const colors = require("./models/color")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set("view engine", "handlebars")
app.use(express.static(__dirname + "/public"))

function getRandomCompliments(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}

app.get("/", function(req, res){
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomCompliments(colors);
  res.render("index.hbs", {compliment: randomCompliment, color: randomColor});
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








app.listen(3000, function () {
  console.log("Listening");

})
