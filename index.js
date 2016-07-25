var express = require('express')
var app = express()
var compliments = require("./models/compliments")

var comps = require("./models/comps.js")

var comp_no_name = require("./controllers/compliment_no_name.js")

var bodyParser = require("body-parser");

// render views using handlebars, from npm install hbs --save
app.set("view engine", "hbs")

app.use(bodyParser.json()); //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })); // handles form submissions

// use non-hbs items in the public directory
app.use(express.static(__dirname +'/public'))

// get the compliments.home method and set path / to the method
app.get("/", compliments.home)

app.post("/", function(req, res){
  comps.push(req.body.new_compliment)
  res.redirect("/")
  // redirects to app.get("/")?
})

app.get("/:name", compliments.name)

// app.get("/:compliment", compliments.getCompliment)


// app.use(route, module.method)

app.listen(3030, function() {
  console.log("server on");
})
