
var express = require("express");
const parser = require("body-parser")
var app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

color = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]



app.listen(4000, () => {
  console.log("app listening on port 4000");
});

app.get("/", (req, res) => {
  res.send("helloworld")
});

// app.post("/", (req,res))=>{
//   compliments.push(req.body.compliment)
// }

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
  <form action="/" method="post">
    <input type="text" name="compliment">
    <button type="submit">Add Compliment</button>
  </form>
  </body>
  </html>
  `

  res.send(htmlString)

});
