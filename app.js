var express = require("express");
var hbs     = require("express-handlebars");
var app     = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.use('/assets', express.static("public"));

function randomPick(array){
  var pick = Math.floor(Math.random() * array.length);
    return array[pick];
};

app.get('/', function(req, res){
  res.render("index.hbs", {
    randomColor: randomPick(colors),
    randomCompliment: randomPick(compliments)
  });
});


app.listen(3001, function(req, res){
  console.log("It's working");
});
