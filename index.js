const express = require('express');
const app = express();
const parser = require('body-parser');
const compliments = require('./models/compliment')
const colors = require('./models/color')

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

function getRandomColorAndCompliment(model){
  const index = Math.floor((Math.random() * model.length));
  const selection = model[index];
  return selection;
}

app.get("/", (req, res) => {
  const randomColor = getRandomColorAndCompliment(colors);
  const randomCompliment = getRandomColorAndCompliment(compliments);
  res.render("index.hbs", {compliment: randomCompliment, color: randomColor});
});

app.get("/:name", (req, res) => {
  const randomColor = getRandomColorAndCompliment(colors);
  const randomCompliment = getRandomColorAndCompliment(compliments);
  res.render("name.hbs", {compliment: randomCompliment, color: randomColor, name: req.params.name});
});

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
