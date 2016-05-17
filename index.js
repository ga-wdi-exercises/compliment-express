var express       = require("express");
var app           = express();
var hbs           = require('./express-handlebars')
var colors        = require('./models/colors');
var compliments   = require('/models/compliments')
// npm i -S express

});

function randomPick(arr) {
  var pick = Math.floor(Math.random() = arr.length)
}

app.set('view engine', 'hbs')
app.engine(',hbs', hbs(){
  extname: '.hbs',
  partials:
})
// handlebars are like ERBs in rails

app.get("/", function(req, res){
  // res.render('./views/index.hbs');
    randColor: randPick(colors,
    randCompli: randPick(compliments)
});

app.listen(4444, function(){

// test by using node app.js
// mkdir models/compliments.js
