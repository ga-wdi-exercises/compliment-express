var express = require("express")
var app = express();
var bodyParser = require("body-parser")
var compliments = require("./models/compliment")
var colors = require("./models/color")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set("view engine", "hbs")
app.use(express.static("/public"))

var randomCompliment = (module) => {
  var randomNum = Math.floor((Math.random() * module.length))
  var randomInstance = module[randomNum]
  return randomInstance
}

app.get("/", (req, res) => {
  var newCompliment = randomCompliment(compliments)
  var newColor = randomCompliment(colors);
  res.render("index.hbs", {compliment: newCompliment, color: newColor})
})

app.get("/:name", (req, res) => {
  var newCompliment = randomCompliment(compliments)
  var newColor = randomCompliment(colors)
  var name = req.params.name;
  res.render("name.hbs", {compliment: newCompliment, color: newColor, name: name})
})

app.post("/:name/new", (req, res) => {
  compliments.push(req.body.name)
  var name = req.params.name;
  res.redirect('/' + name)
})

app.listen(3000, () => {
  console.log("listening on port 3000");
})
