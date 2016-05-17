var express     = require('express');
var app         = express();
var colors      = require('./models/colors')
var compliments = require('./models/compliments')

function randPick(arr) {
  var pick = Math.floor(Math.random() * arr.length);
  return arr[pick];
}

app.get('/', function(req,res){
 res.send(randPick(compliments))
});

app.listen(4444, function(){
  console.log("yipee");
})
