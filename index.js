var express = require("express")
var app     = express()

compliments = [
  "You don't suck",
  "You're one of thecoolest people here, in this room.",
  "You'll definately get a job. Eventually...",
  "I don't care what every says about you, I still like you"
]

randomCompliment = compliments[Math.floor(Math.random() * compliments.length)]
console.log(randomCompliment)

app.get("/", function(req, res){
  res.send(randomCompliment);
});

app.listen(3001, function(){
  console.log("It's aliiiiveee")
})
