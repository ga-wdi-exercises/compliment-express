var express = require("express");
var app = express();
var compliment = require("./models/compliment.js")
var color = require("./models/color.js")


app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'))

function getRandomCompliment(model){
  var index = Math.floor((Math.random() * model.length));
  var pick = model[index];
  return pick;
}

app.get("/", function(req, res){
  var ranComp = getRandomCompliment(compliment);
  var ranCol = getRandomCompliment(color);
  res.render("index.hbs", {compliment: ranComp, color: ranCol});
});

app.get("/:name", (req, res) => {
  var ranComp = getRandomCompliment(compliment);
  var ranCol = getRandomCompliment(color);
  var name = req.params.name;
  res.render("name.hbs", {compliment: ranComp, color: ranCol, name: req.params.name});
});

app.post("/:name/new", function(req, res){
  compliment.push(req.body.name);
  var name = req.params.name;
  res.redirect('/' + name);
});

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
