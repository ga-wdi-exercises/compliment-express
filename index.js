//add modules
var express = require('express');
var hbs = require('express-handlebars');
var app = express();

//sets up app to render views and use handlebars
app.set('view engine', 'hbs');
app.engine('.hbs', hbs({
  extname: '.hbs',
  partialsDir: 'views/',
  layoutsDir: 'views/',
  defaultLayout: 'main-layout'
}));

app.use('/assets', express.static('public'));

app.get('/', function(req, res){
  res.render('welcome')
});

app.listen(3001, function(){
  console.log('connected to port:3001');
})
