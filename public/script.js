var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080", "#FFF000"]

let compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]

function randomize (min, max) {
    var random = (Math.floor(Math.random() * compliments.length))
    var body = document.body
    body.style.background = colors[random]
    document.getElementsByTagName('h1')[0].innerText = compliments[random]
}

randomize(0, 4)
