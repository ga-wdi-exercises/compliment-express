const express = require("express");
const app = express();
const compliments = require("./models/compliments")
const colors = require("./models/colors")
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'))

app.listen(4000, () => {
  console.log("app listening on port 4000");
});

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

//randomize items
function getRandom(module){
  var index = Math.floor((Math.random() * module.length));
  var getItem = module[index];
  return getItem
}

app.get('/', (req, res)=>{
  var newCompliment = getRandom(compliments);
  var newColor = getRandom(colors);
  res.render('index.hbs', {compliment: newCompliment, color: newColor})
})

app.get('/:name', (req, res)=>{
  var newCompliment = getRandom(compliments);
  var newColor = getRandom(colors);
  var name = req.params.name;
  res.render('personal.hbs', {compliment: newCompliment, color: newColor, name: name})
})
