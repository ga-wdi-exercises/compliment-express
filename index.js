const express = require("express");
const app = express();

app.set("view engine", "hbs")

app.listen(4000, () => {
  console.log("Listening for requests on port 4000");
});

app.use(express.static(_dirname + '/public'))

app.get("/:name", (req, res) => {
  let name = req.params.name
  res.render("index", "What's up " + {name} "?") ;
});

app.get("/", (req,res) => {
  res.send("Your Random Compliment")
});
