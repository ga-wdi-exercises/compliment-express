var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// establish bodyParser 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.send('HELLO')
})

// define the applications port
app.listen(3000, function() {
    console.log("The app is up and running on port 3000")
})
