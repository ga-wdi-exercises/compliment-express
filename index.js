var express = require("express")
var app = express()
var bodyParser = require("body-parser")

var compliments = [
  "If you were running for President, I'd vote for you. And clear your search history. Because Politics is a dirty business and they will dig that shit up. Don't worry I got you.",
  "You are not someone I pretend not to see in public."
]
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.set("view engine", "hbs")
app.use(bodyParser.json()) // handles json requests
app.use(bodyParser.urlencoded({extended:true})) // handles form submissions
app.listen("2000", () => {
  console.log("Express is working")
})

app.get("/", (req, res) => {
  console.log(`${compliments}`)
  var randCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  var randColor = colors[Math.floor(Math.random() * colors.length)];
  res.render("index.hbs", {compliment: randCompliment, color: randColor}) // sets the dynamic results on the view pages to these new functions.
})
app.post("/", (req, res) => {
  console.log(req.body)
  console.log("Im here")
  compliments.push(req.body.compliment)
  res.redirect("/")
})
app.get("/:name", (req, res) => {
  var randCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  var randColor = colors[Math.floor(Math.random() * colors.length)];
  res.render("name-compliments-show", {name: req.params.name, compliment: randCompliment, color: randColor})
})


// App now has express.
// when we enter "/" we display a compliment and color from .sample.
// so we need to define those arrays.
// res.send(complements.sample)?? and colors.sample needs to be styled.
