let compliments = [
  'You are getting better and better everyday!',
  'You are a coding superstar!',
  'You are doing a great job on that homework!',
  'Thanks for always giving 100%!',
  'Never give up!'
]

let colors = [
  '#FFBF00',
  '#0080FF',
  '#01DF3A',
  '#FF0080'
]

function Compliment () {
  let theCompliment = compliments[Math.floor(Math.random() * 5)]
  return theCompliment
}

function Color () {
  let theColor = colors[Math.floor(Math.random() * 4)]
}

let complimentFunction = Compliment()
let colorFunction = Color()
/* got help with the funciton for picking a random item out of an array from:
https://zenscript.wordpress.com/2013/11/23/how-to-pick-a-random-entry-out-of-an-array-javascript/*/
module.exports = complimentFunction
module.exports = colorFunction
module.exports = compliments
module.exports = colors
