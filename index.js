var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var compliments = require("./models/compliment.js");
var color = require("./models/color.js")

app.use(express.static(__dirname + '/public')); // Serve static content (css, etc) for the app from the “public” directory in the application directory
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: ture}));
app.set('view engine', 'hbs');

app.listen(4000, () => {
  console.log("app listening on port 4000");
});

app.get("/", (req, res) => {
    var compliment = compliments[Math.floor(Math.random() * compliments.length)];
    var color = colors[Math.floor(Math.random() * colors.length)];
    res.render("index.hbs", {compliment, color});
});

app.get("/:name", (req, res) => {
    var compliment = compliments[Math.floor(Math.random() * compliments.length)];
  	var color = colors[Math.floor(Math.random() * colors.length)];
  	var name = req.params.name;
  	res.render("name", {name, compliment, color});
});

app.post("/", (req, res) => {
	var newCompliment = req.body.new_compliment
	compliments.push(newCompliment);
});
