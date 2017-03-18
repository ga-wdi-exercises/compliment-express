const express = require("express")
const app = express()

const compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

function sample(A) {
  let n = A.length
  let i = Math.floor(Math.random()*n)
  return A[i]
  return i
}

app.listen(4000, _ => {
  console.log("App listening on port 4000")
})

app.get("/", (req, res) => {
  let compliment = sample(compliments)
  res.send(`<p>Hello!</p>
            <p>${compliment}</p>`)
})
