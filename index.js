
  var express = require("express")
  var app = express()

  var bodyParser = require("body-parser");

  app.use(bodyParser.json()); //handles json post requests
  app.use(bodyParser.urlencoded({ extended: true })); // handles form submissions

  app.set("view engine", "hbs")

  var compliment = require("./models/compliment.js");
  var colors = require("./models/colors.js");


  app.listen(5555, ()=> {
    console.log("sup fool");
  })

  app.get("/:name", (req,res) => {
    currentCompliment = compliment.compliment()
    currentColor = colors.colors()
    name = req.params.name
    res.render("hello", {currentCompliment, currentColor, name})
  })

  app.get("/", (req,res) => {
    currentCompliment = compliment.compliment()
    currentColor = colors.colors()
    res.render("index", {currentCompliment, currentColor})
  })

  app.post("/", (req,res) => {

    currentCompliment = compliment.compliment()
    currentColor = colors.colors()
    name = req.body.player_name

    res.render("hello", {currentCompliment, currentColor, name})
  })
