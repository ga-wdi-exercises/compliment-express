const express = require("express");
const compliment = require("./compliment.js");

const app = express();

app.set("view engine", "hbs")
app.use(express.static(__dirname + "/public"))


app.get("/", (req, res) => {
  res.send("Hello" + `${compliment.push([Math.floor(Math.random()* compliment.length)])}`)
})

app.listen(4000, () => {
  console.log("app listening on port 4000");
})
