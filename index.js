var express = require("express");
var app = express();
app.set("view engine", "hbs");

app.listen(4001, function () {
    console.log("App listening on port 4001");
});


// Because the parameter finishes, with a ? it will proceed whether a name is presented or not.
app.get("/:name?", function (req, res) {
    var compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Is it Ruby Tuesday yet?",
        "It's almost beer o'clock",
        "The Force is strong with you"
    ];
    var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

    var name = req.params.name || false;
    var compliment = compliments[Math.floor( Math.random() * compliments.length )];
    var color = colors[Math.floor( Math.random() * colors.length )];

    res.render("index", {name: name, color: color, compliment: compliment});
})