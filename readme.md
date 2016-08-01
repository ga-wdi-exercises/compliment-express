<<<<<<< HEAD
# WDI Emergency Compliment

## Mission…

Create your own version of [Emergency Compliment](http://emergencycompliment.com/), except making the compliments WDI-themed. When a user visits the site, they should be greeted with a WDI-themed compliment to cheer them up.

Create a new directory called `emergency_compliment` that holds your Sinatra app. Within this folder, create the following files:

* `server.rb`
* `views/layout.erb`
* `views/compliment.erb`


## Level 1: generic compliment

When you visit the root (`"/"`) of your app, it should display a generic greeting and a randomly chosen compliment. The background color of the app should be randomized as well.

Here are some sample compliments and colors (feel free to substitute in your own):

```ruby
compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
```

## Level 2: personalized compliment

When you visit `"/name"` (ie: `"/randy"`), the greeting should personalize itself to the provided name. There should still be a random compliment and background color.

## Level 3: user submitted compliments

Allow a user to add to the list of compliments using a POST request. You can submit POST requests to the app using Postman or a form.
=======
# WDI Emergency Compliment- Git-Teams-Starter (Angular)

## Mission…

Create your own version of [Emergency Compliment](http://emergencycompliment.com/) using Angular!

When a user visits the site, they should be greeted with a random compliment to cheer them up.

We are "faking" a back-end by using `data.js` for our compliments.

## Set-Up:

1. `git clone`
2. `$ cd emergency_compliment`
3. `$ git checkout git-teams-starter`
3. `$ hs`
4.  visit http://localhost:8080/ in your browser!

## Level 1: Generic Compliment

When you visit the root `http://localhost:8080/` it should display a randomly chosen compliment.
>>>>>>> kwg-solution
