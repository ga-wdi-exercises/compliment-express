module.exports = {
  index(req, res){



    let numCompliment = Math.floor(Math.random() * compliments.length);
    let numColor = Math.floor(Math.random() * colors.length);
    console.log(compliments[numCompliment]);
    console.log(colors[numColor]);
    // process.body.style.backgroundColor = "colors[numColor]";
    // res.send(compliments[numCompliment])

    let name = req.params.userName
    res.render('index', {
      name: name,
     })

  }
}
