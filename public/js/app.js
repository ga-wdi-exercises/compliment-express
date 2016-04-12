
window.addEventListener('load', function(){
  var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080", 'blue', 'lemonchiffron', 'grey', 'red'];
  var rando = Math.floor(Math.random() * 8);
  document.body.style.backgroundColor = colors[rando];
});
