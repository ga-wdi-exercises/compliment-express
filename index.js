var express     = require("express");
var bodyParser  = require("body-parser");
var compliments = require("./models/compliments.js");
var colors      = require("./models/colors.js");
var app         = express();

app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function randomize(model){
  let random = model[Math.floor(Math.random()*model.length)]
  return random
}

app.get("/:name?", (req, res) => {
  let name = req.params.name;
  let randomCompliment = randomize(compliments);
  let randomColor = randomize(colors);
  res.render("index.hbs", {name: name, compliment: randomCompliment, color: randomColor});
})

app.post("/", (req, res) => {
  compliments.push(req.body.name);
  res.redirect('/')
})

app.listen(3001, () => {
  console.log("Working!");
})
