var express = require("express");
var app = express();
var hbs = require("hbs")
var bodyParser = require("body-parser")
var compliments = require("./models/compliment")
var colors = require("./models/color")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set("view engine", "hbs")
app.use(express.static("public"))

function RandomCompliments(module){
    var randomComplimentIndex = Math.floor((Math.random() * module.length));
    var randomInstance = module[randomComplimentIndex];
    return randomInstance;
}

app.get("/", (req, res) => {
    var randomComp = RandomCompliments(compliments)
    var randomColor = RandomCompliments(colors)
    res.render("index.hbs", {compliment: randomComp, color: randomColor})
})

app.get("/:name", (req, res) => {
    var randomComp = RandomCompliments(compliments)
    var randomColor = RandomCompliments(colors)
    var name = req.params.name;
    res.render("name.hbs", {compliment: randomComp, color: randomColor, name: name})
})
app.listen(3000, () => {
  console.log("app listening at http://localhost:3000/")
})
