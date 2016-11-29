module.exports = {
  colors() {
    colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
    var randNum = Math.floor(Math.random() * colors.length);
    return colors[randNum]
  }
}
