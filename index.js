const express = require('express');
const app = express();

app.listen(4000, () => {
  console.log('App listening on port 4000')
})

app.get("/", (req,res) => {

let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]



let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

 function random(arr){
   return arr[Math.floor (Math.random() * arr.length)];
}


  res.send(random(compliments))
});
