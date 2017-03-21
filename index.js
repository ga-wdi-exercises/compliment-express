
var express = require("express");
var app = express();

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

color = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]



// app.set("view engine", "hbs");
// app.use(express.static(__dirname + '/public'))



app.listen(4000, () => {
  console.log("app listening on port 4000");
});

app.get("/", (req, res) => {
  res.send("helloworld")
});

app.get("/:name?", (req, res) => {
  let randomColor = color[Math.floor(Math.random() * color.length)]
  let randomCompliment = compliments[Math.floor(Math.random() * compliments.length)]
  let name = req.params.name
  let htmlString = `
  <html>
  <style>
  body{
    background-color: ${randomColor};
  }
  </style>
  <body>
  <h1>Hi ${name} ${randomCompliment}</h1>
  </body>
  </html>
  `

  res.send(htmlString)
});
