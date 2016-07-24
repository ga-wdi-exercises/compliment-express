var express = require('express')
var app = express()
var compliments = require("./models/compliments")

var colors = require("./models/colors.js")
var comps = require("./models/comps.js")

var comp_no_name = require("./controllers/compliment_no_name.js")

// render views using handlebars, from npm install hbs --save
app.set("view engine", "hbs")

// use non-hbs items in the public directory
app.use(express.static(__dirname +'/public'))

// get the compliments.home method and set path / to the method
app.get("/", function(req, res) {
  res.render("index")
})

app.get("/:name", compliments.name)

// app.get("/:compliment", compliments.getCompliment)


// app.use(route, module.method)

app.listen(3030, function() {
  console.log("server on");
})
