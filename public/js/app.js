console.log("javascript loaded")

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you",
  "A 3rd tier cable network would totally create a television show about you.",
  "A doctor once saw your butt through the hospital gown. They approve!",
  "You could open that jar of mayonnaise using only 3 fingers.",
  "You could make up a weird religion or diet and everyone would follow it.",
  "Sushi chefs are wowed by your chopstick dexterity."
];

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080", "#c5e3e7", "#8fc0c7", "#c74b4b"];

var el = document.body.querySelector('#compliment');

function randomize() {
  var num = Math.floor(Math.random() * compliments.length);
  el.innerHTML = compliments[num];
  var col = Math.floor(Math.random() * colors.length);
  document.body.style.background = colors[col];
}

randomize();
