//add modules
var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('hola, mundo!');
});

app.listen(3001, function(){
  console.log('connected to port:3001');
})
