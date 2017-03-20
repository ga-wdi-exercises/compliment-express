var express = require("express")
var app = express()
var compliments = require("./models/compliments")
var colors = require("./models/colors")

app.set("view engine", "hbs")
app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    res.render('index')
});


app.listen(4000, _ => {
    console.log('app is live on port 4000');
});
