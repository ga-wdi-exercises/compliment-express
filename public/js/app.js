console.log("javascript loaded")

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080", "#c5e3e7", "#8fc0c7", "#c74b4b"];

var el = document.body.querySelector('h2');

function randomize() {
  var num = Math.floor(Math.random() * compliments.length);
  el.innerHTML = compliments[num];
  var col = Math.floor(Math.random() * colors.length);
  document.body.style.background = colors[col];
}

randomize();
