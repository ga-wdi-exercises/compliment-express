const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));
app.set("view engine", "hbs");

app.listen(4000, () => {
  console.log("app listening on port 4000");
});

//stolen from emergencycompliment.com
let compliments = [
  "Strangers all wanna sit next to you on the bus.",
  "Coworkers fantasize about getting stuck in the elevator with you.",
  "The FBI tapped your phone just to hear the sound of your voice.",
  "If Einstein could meet you, he'd be 'mildly to moderately' intimidated.",
  "You could make up a weird religion or diet and everyone would follow it."
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]



app.get("/", (req, res) => {
	//got a little help from stack overflow for this method to randomize.  forgot that .sample was ruby...
	var compliment = compliments[Math.floor(Math.random() * compliments.length)];
	var color = colors[Math.floor(Math.random() * colors.length)];
    res.render("index", {compliment, color});
});