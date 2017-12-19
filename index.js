var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// establish bodyParser 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// random generator
function generateRandom() {
    console.log("RANDOM WORKS");
}

// root route
app.get("/", function(req, res) {
    generateRandom();
    res.send('HELLO');
})

// define the applications port
app.listen(3000, function() {
    console.log("The app is up and running on port 3000");
})
