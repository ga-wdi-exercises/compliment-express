var express = require("express");//
var hbs = require("express-handlebars");
var db = require(".db/connection");


var app = express();
app.use("/public",
express.static("public"));
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir:"views/",
  layoutsDir: "views",
  defaultLayout:"layout-main"
}));

app.get("/compliments", function(req, res){
  res.render("compliments-index", {
    compliments: db.compliments
  });
});

app.listen(3001, function(){
  console.log("Hello world");
});
