window.addEventListener("load", function(){
  var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080", "#E0FFFF", "#BA55D3"];
  var randomColor = colors[Math.floor(Math.random()*colors.length)];
  document.body.style.background = randomColor;
});
