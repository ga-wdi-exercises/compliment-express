const colors = ['#FFBF00', '#0080FF', '#01DF3A', '#FF0080']
const compliments = [
  "Surely, someone is stupider than you.",
  "Turn that frown upside down ... Now wipe that smirk off your face.",
  "Really? That shirt with those pants?",
  "Thanks for visiting my site, but don't you have anything better to do?",
  "Sit up straight; your posture is crap."
]

function randomElement(arr) {
  let len = arr.length
  let index = Math.floor(Math.random() * len)
  return arr[index]
}

module.exports = {
  index(req, res) {
    let color = randomElement(colors)
    let compliment = randomElement(compliments)
    let name = req.params.name
    res.render("index", {
      color,
      compliment,
      name
    })
  }
}
