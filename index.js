const express = require("express")
const app = express();
const bodyParser = require('body-parser')
const compliments = require('./models/compliments.js')
const colors = require('./models/color.js')

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

function getRandomCompliments(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomIndex
}

app.get("/", function(req, res){
  
})
