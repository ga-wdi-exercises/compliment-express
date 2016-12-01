var express = require("express");
var app = express();
app.use(express.static(__dirname + '/public'))
app.set("view engine", "hbs");

var data = require("./data.js");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/:name?", (req, res) => {
  var color = data.colors[Math.floor(Math.random() * data.colors.length)];
  var compliment = data.compliments[Math.floor(Math.random() * data.compliments.length)];
  var name = req.params.name

  res.render("index", {color, compliment, name});
});

app.post("/", (req, res) => {
   compliments.push(req.body.name);
   res.redirect('/')
 })

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
