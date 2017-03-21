var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var compliments = require("./models/compliments");
var colors = require("./models/colors");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.set("view engine", "hbs")
app.use(express.static(__dirname + "/public"))



function findRandom(thing) {
    return Math.floor(Math.random() * thing.length)
}

app.get('/', (req, res) => {
    let index = findRandom(compliments)
    let color = findRandom(colors)
    res.render('index.hbs', {
        compliment: compliments[index],
        color: colors[color]
    });
});

app.get('/:name?', (req, res) => {
    let index = findRandom(compliments)
    let color = findRandom(colors)
    let name = req.params.name
    res.render('personal.hbs', {
        name: name,
        compliment: compliments[index],
        color: colors[color]
    });
    // res.send('New ' + req.params.new_compliment);
});


app.listen(4000, _ => {
    console.log('app is live on port 4000');
});
