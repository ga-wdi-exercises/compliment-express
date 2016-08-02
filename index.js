var express = require("express");
var app = express();

app.set("view engine", "hbs");

app.listen(4000, function(){
  console.log("app listening on port 4000");
});

var compliments =[
  "We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are. - J.K. Rowling",
  "Learn to be happy with what you have while you pursue all that you want - Jim Rohn",
  "Experience is what you get when you don't get what you want. - Dan Stanford",
  "People often say that motivation doesn't last. Well, neither does bathing, that's why we recommend it daily. - Zig Ziglar",
  "The cost of being wrong is less than the cost of doing nothing. - Seth Godin",
  "It always seems impossible until its done. - Nelson Mandela",
  "Start where you are. Use what you have. Do what you can - Arthur Ashe",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "We can always make the choice to start becoming something else, if we care. - Seth Godin",
  "Life is like a bicycle. To keep your balance you must keep moving. - Albert Einstein",
  "The secret of getting ahead is getting started. - Mark Twain",
  "Kindness is the language which the deaf can hear and the blind can see. - Mark Twain",
  "Do the difficult things while they are easy and do the great things while they are small.  A journey of a thousand miles must begin with a single step. - Lao Tzu",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
  "Quality is not an act, it is a habit. - Aristotle",
  "We may encounter many defeats but we must not be defeated. - Maya Angelou",
  "A goal is a dream with a deadline. - Napoleon Hill"
]

var colors =  ["#F4B350", "#446CB3","#87D37C","#36D7B7", "#E87E04", "#EF4836"]

Array.prototype.random = function(){
    return this[Math.floor(this.length * Math.random())]
}

app.get("/", function(req, res){
  res.render("index",{
    compliment: compliments.random(),
    color: colors.random()
  });
});
