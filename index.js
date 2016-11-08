var express       = require("express");
var hbs           = require("express-handlebars");
var parser        = require("body-parser")
var compliments    = require("./compliments")
var app = express()

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended:true}))

app.get("/", function(req, res){
  randCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  console.log(randCompliment);
  res.render("index", {
    randCompliment
  });
});

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
