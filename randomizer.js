// The randomizer module is in charge of the random compliment/color generation 

// Data arrays
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]
var name = ''
// Randomizer main object with 2 functions which return random compliments/colors
var randomizer = {
  randomComp: () => {
    let randomKey = Math.floor(Math.random() * compliments.length)
    let randomCompliment = compliments[randomKey]
    return randomCompliment
  },
  randomColor: () => {
    let randomKey = Math.floor(Math.random() * colors.length)
    let randomColor = colors[randomKey]
    return randomColor
  },
  setName: (newName) => {
    name = newName
  },
  saveComp: (compliment) => {
    compliments.push(compliment)
  }
}

module.exports = randomizer