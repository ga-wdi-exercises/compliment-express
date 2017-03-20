const express = require('express');
const app = express();

app.set("view engine", "hbs")
app.listen(4000, () => {
  console.log("Listening on port 4000")
})

app.get("/", (req, res) => {
  let compliments = ["Be the villain you were born to be. Stop waiting for someone to come along and corrupt you. Succumb to the darkness yourself.", "Personally, I’m a fan of ignoring the problem until eventually it goes away.", "You're not pretty enough to be this stupid.", "I can explain it to you but I can't understand it for you.", "Wow, you've really lived up to your potential.", "I hope the rest of your day is as pleasant as you are.", "Ah, so you're the reason we have warning labels on everything.", "I’ve been called worse things by better people.", "I’m not saying I hate you, but I would unplug your life support to charge my phone", "I can't imagine what qualities you may have that would compensate for your behavior in public."]
  // var rand = myArray[Math.floor(Math.random() * myArray.length)];
  let compliment = compliments[Math.floor(Math.random() * compliments.length)]
  console.log(compliment);
  let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
  let color = colors[Math.floor(Math.random() * colors.length)]
  res.render("index", {compliment, color})
})
