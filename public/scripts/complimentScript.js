// Compliment and Color Generators

var compliments = [
    'Your instructors love you',
    'High five = ^5',
    'Is it Ruby Tuesday yet?',
    "It's almost beer o'clock",
    'The Force is strong with you'
]
var colors = ['#FFBF00', '#0080FF', '#01DF3A', '#FF0080']

function randomCompliment() {
    return randomGenerator(compliments)
}

function randomColor() {
    return randomGenerator(colors)
}

function randomGenerator(array) {
    return array[Math.floor(Math.random() * array.length)]
}
var bg = document.querySelector('body')
bg.style.backgroundColor = randomColor()

document.querySelector('h1').innerHTML = randomCompliment()
