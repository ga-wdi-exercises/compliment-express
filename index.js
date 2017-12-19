var express = require('express');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var app = express();

// handlebars config
app.set("view engine", "hbs")
app.engine('.hbs', hbs({
    extname:        '.hbs',
    partialsDir:    'views/',
    layoutsDir:     'views/',
    defaultLayout:  'layout'
})) 

// Serve static content (css, etc) for the app from the “public” directory in the application directory
app.use(express.static(__dirname + '/public')); 

// establish bodyParser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// random generator
function generateRandom() {
    console.log("RANDOM WORKS");
}

// root route
app.get("/", function(req, res) {
    // generateRandom();
    var test = 'TEST';
    res.render("welcome", {test: test});
})

// personalized route
app.get("/:name", function(req, res) {
    var name = req.params.name;
    res.render("customized", {name: name});
})

// define the applications port
app.listen(3000, function() {
    console.log("The app is up and running on port 3000");
})
