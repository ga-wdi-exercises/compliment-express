let express = require("express");
let app = express();
let bodyParser = require("body-parser")
var compliments = require('./models/compliment.js')
var colors = require('./models/color.js')

app.use(bodyParser.urlencoded({extended: true}))

app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))


function randomCompliments(module) {
  let randomIndex = Math.floor((Math.random() *  module.length));
  let randomIndexInstance = module[randomIndex];
  return randomIndexInstance;
}


app.get("/", (req, res) => {
  let randomCompliment = randomCompliments(compliments);
  let randomColor =  randomCompliments(colors);
  res.render("index.hbs", {compliment: randomCompliment, color: randomColor});
});


app.get("/:name", (req, res) => {
  let randomCompliment = randomCompliments(compliments);
  let randomColor =  randomCompliments(colors);
  let name = req.params.name;
  res.render("name.hbs", {compliment: randomCompliment, color: randomColor, name: name});
});

app.post("/:name/new", (req,res) => {
  compliments.push(req.body.complimentName);
  let complimentName = req.params.complimentName
});

app.listen(4000, () => {
  console.log("app listening on port 4000")
})
