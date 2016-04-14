var express = require("express");
var app = express();

app.set("view engine", "hbs");

app.listen(4000, function(){

console.log("it is alive");

});

app.get("/" , function(request, response){

console.log("Hello");

});
