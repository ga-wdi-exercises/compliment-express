module.exports = {
  compliment() {
    compliments = [
      "Your instructors love you",
      "High five = ^5",
      "Is it Ruby Tuesday yet?",
      "It's almost beer o'clock",
      "The Force is strong with you"
    ]
    var randNum = Math.floor(Math.random() * compliments.length);
    return compliments[randNum]
  }
}
