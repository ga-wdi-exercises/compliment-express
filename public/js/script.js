function colorSwitcher(colors){
  var randomNumber = Math.random();

  var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

  var color = "";

  if (randomNumber < .25){
    color = colors[0];
  } else if (randomNumber < .5){
    color = colors[1];
  } else if (randomNumber < .75){
    color = colors[2];
  } else {
    color = colors[3];
  }

  document.body.style.backgroundColor = color;
}

colorSwitcher();
