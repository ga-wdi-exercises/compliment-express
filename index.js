var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose      = require("./db/connection");
var Compliment = mongoose.model("Compliment")


app.use(express.static("public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var compliment = [
  "You can do it",
  "You are almost there",
  "I believe in you"
]

var color = [ "#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  var colors = color[(Math.floor(Math.random()*4))]
  var compliments = compliment[(Math.floor(Math.random()*3))]
  res.render("index", {color: colors, compliment: compliments})
  // res.send(`Hello, ${compliments}`)
})

app.get("/:name", (req, res) => {
  var compliments = compliment[(Math.floor(Math.random()*3))]
    var colors = color[(Math.floor(Math.random()*4))]
  // res.send(`Hello, ${req.params.name}, ${compliments}`)
  var names = (req.params.name)
  res.render("color", {color: colors, compliment: compliments, name: names})

})

app.post("/", function(req, res) {
  res.json(req.body)
  Compliment.create(req.body.compliment).then(compliment => {
    res.redirect("/")
  })
})

app.listen(3000, () => {
  console.log("app listening at http://localhost:3000/")
})
