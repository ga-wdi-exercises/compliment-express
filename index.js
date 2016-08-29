var express = require("express");
var app = express();

app.listen(4001, function () {
    console.log("App listening on port 4001");
});


// Because the parameter finishes, with a ? it will proceed whether a name is presented or not.
app.get("/:name?", function (req, res) {
    res.send("Test")
})