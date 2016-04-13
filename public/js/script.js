window.addEventListener('load', function(){
  var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
  var myRandom = Math.floor(Math.random() * 4);
  document.body.style.backgroundColor = colors[myRandom];
});
