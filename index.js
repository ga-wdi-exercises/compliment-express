var express = require("express");
var parser = require("body-parser");
var hbs = require("express-handlebars");
var session = require("express-session");
var request = require("request");
var mongoose = require("./db/connection");

var app = express();

var Quote = mongoose.model("Quote");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
    extname: ".hbs",
    partialsDir: "views/",
    layoutsDir: "views/",
    defaultLayout: "layout-main"
}));
app.use("/assets", express.static("public"));
app.use(parser.json({
    extended: true
}));

// root
app.get("/*", function(req, res) {
    Quote.find({}).then(function(quotes) {
        var rand = quotes[Math.floor(Math.random() * quotes.length)];
        res.render("index", {
            quote: rand
        });
    });
});

app.listen(app.get("port"), function() {
    console.log("We're online.");
});
