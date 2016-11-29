
  var express = require("express")
  var app = express()

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
