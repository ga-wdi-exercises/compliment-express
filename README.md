## NOTES

Express is taking Node and focusing/extending it to turn it into a full web server. So that computer can send requests to other computers. Can't do much in just Node.

Node is using JS to process files (doesn't have anything to do with browser)

#Why use express?
So that you can use JS in front end and back end.
Express is small and light weight and starts out with nothing.


#1
Type $ npm init
-- npm init is like a ruby gem file. package.json is like a gem (module in node) file for Node apps.
-- just hold down return until all questions are done.
-- now you should have package.json file. Never edit this file

#2
Type $ npm install
--this is like bundle install in Rails

#3
$ npm install --save express
-- this downloads and installs a new module
-- this downloads express
-- -- save (creates dependencies and puts it in package.json file. If I only say npm install express, it won't do this.)

#4
You never want to push up node_modules to github so you need to create a git ignore file.

$ touch .gitignore

Then inside gitignore file do node_modules/*

#5
Create index.js file and type in this (now this is a Node app):

```js
var express = require("express");

var app = express();

app.get("/", function(req, res){
  res.send("Hello");
});

app.listen(3001, function(){
  console.log("I work");
});
```

Now to view site go to localhost:3001


#6
Get handle bars
$ npm install --save express-handlebars

Then in index.js do
```js
var hbs = require("express-handlebars");
```

#7
Create Views folder and layout-main.hbs file inside it

Inside views/layout-main.hbs
```html
<!DOCTYPE html>
<html>
  <head>
    <title> Emergency Compliments </title>
  </head>
  <body>
    <h1><a href="/"> Emergency Compliment </a></h1>
    {{{body}}} <!-- this yields information -->
  </body>
</html>
```

#8
Create a new file for compliments and call it compliment.hbs

#9
Get your new views to show up on your page.
In index.js do:

```js
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

// and inside app.get("/", function(req, res){ do
res.render("compliment"); //since my file name is

```

#10

Create new folder called public (this is where js and css files go)
Connct CSS and JS files to views

in index.js
```js
app.use("/public",
express.static("public"));
```

in layout-main.hbs do
  <link rel="stylesheet" href="public/css/styles.css"/>

#11

Create js file in public and then link to it in layout-main.hbs

#12

Create new app.get("/newPageName", function(req, res){

and make a new .hbs file for that new page
Then make an object inside the new route and view the data in the .hbs page using handlebars

#13
Take out object from inside route and make it available on all pages. Create a db folder and inside that folder make a seeds.json file

#14
create a connection.js file in db folder.
and type:
```js
var seedData = require("./seeds");
```

#15

Create show page and route for it.
