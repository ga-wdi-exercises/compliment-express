var express = require("express")
var app = express()
var hbs = require("hbs")
var bodyParser = require("body-parser")

let compliment = ["Your hair is small", "You look like Chelsea Clinton", "I wouldn't punch you at at a Trump rally"]
let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.use(bodyParser.urlencoded({extended: true}))//form submission
app.use(bodyParser.json())
app.set("view engine", "hbs")

app.listen("2000", () => {
  console.log("harambe")
})

app.get("/", (req, res) => {
  var randComp = compliment[Math.floor(Math.random() * compliment.length)];
  var randCol = colors[Math.floor(Math.random() * colors.length)];
  res.render("index", {
    compliment: randComp,
    colors: randCol
  })
})

app.get("/new-compliment", (req, res) => {
  res.render("new-compliment")
})

app.post("/new-compliment", (req, res) => {
  compliment.push(req.body.compliment)
  res.redirect("/")
})

app.get("/:name", (req, res) => {
  var randComp = compliment[Math.floor(Math.random() * compliment.length)];
  var randCol = colors[Math.floor(Math.random() * colors.length)];
  res.render("name-compliment", {
    compliment: randComp,
    colors: randCol,
    name: req.params.name
  })
})
