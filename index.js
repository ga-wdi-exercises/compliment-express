const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const compliments = require("./models/compliment");
const colors = require("./models/color");



app.use(bodyParser.json()); //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })); // handles form submissions

app.set("view engine", "hbs")//not sure if it matters if this has to be below the other app.use or not.
// app.use(express.static(_dirname + '/public'))

function getRandomCompliment(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}


app.get("/", (req,res) => {
  var randomCompliment = getRandomCompliment(compliments);
  var randomColor = getRandomCompliment(colors);
  res.render("welcome", {compliment: randomCompliment, color: randomColor});
});

app.get("/:name", (req, res) => {
  let name = req.params.name || "stranger";
  res.render("index", {compliment: randomCompliment, color: randomColor}) ;
});

app.post("/", (req, res) => {
  var name = req.params.name
  var randomCompliment = getRandomCompliment(compliments);
  var randomColor = getRandomCompliment(colors);
  res.render("index", {
    name: req.body.name,
    compliment: randomCompliment,
    color: randomColor
  })
})

app.listen(4000, () => {
  console.log("Listening for requests on port 4000");
});
