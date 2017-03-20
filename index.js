var express = require("express");
var app = express();
var compliments = require("./models/compliments");
var colors = require("./models/colors");

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


app.listen(4000, _ => {
    console.log('app is live on port 4000');
});
