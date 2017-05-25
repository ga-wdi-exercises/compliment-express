const express = require('express');
const app = express();
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'))

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];
let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

let random = (arr) => {
   return arr[Math.floor(Math.random() * arr.length)];
}

let userCompliments = {};

app.get("/", (req,res) => {
  let randomCompliment = random(compliments);
  let randomColor = random(colors);
  res.render("index", {randomCompliment, randomColor});
});

app.get("/:name", (req,res) => {
  let user = userCompliments[req.params.name]

  if (user) {
    let randomCompliment = user[user.length - 1]
  }
  else {
     randomCompliment = random(compliments);
  }
  let randomColor = random(colors);
  let name = req.params.name;
  res.render("personalized.hbs",{randomCompliment, randomColor, name})
})

app.post("/:name", function(req, res){
  if(userCompliments[req.params.name]) {
      userCompliments[req.params.name].push(req.body.compliment);
      }
      else {
        userCompliments[req.params.name] = [];
        userCompliments[req.params.name].push(req.body.compliment);
      }
    var name = req.params.name;
    res.redirect(`/${name}`);
  })

app.listen(4000, () => {
  console.log('App listening on port 4000')
})
