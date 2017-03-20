const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const compliments = require("./compliments.js")



app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


 // randomized compliment & color
app.get("/", compliments.index)

// add a compliment
app.post("/", (req,res) => {
 res.render("index", {
   new_compliment: req.body.new_compliment,
 })
})
 // personalized compliment
app.get("/:name", compliments.index)


app.listen(4000, () => {
  console.log("app listening on port 4000")
})
