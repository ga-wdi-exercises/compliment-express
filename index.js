const express = require('express');
// const hbs = require('handlebars');
const app = express();
const indexController = require('./controllers/indexController.js');

app.set('view engine', 'hbs');

app.get('/', indexController.index);
app.get('/:name', indexController.show);

app.listen('3005', ()=> {
    console.log('listening on port 3005');
});
