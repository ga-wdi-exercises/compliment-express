module.exports = {
  index: (req, res) => {

    const name = req.params.name
    var newCompliment = req.body.newCompliment


    if(typeof newCompliment !== "undefined")  {
      compliments.push(newCompliment)
      newCompliment = undefined;
      // console.log(`set to undefined. ${newCompliment}`);
    }

    // console.log(compliments);
    const changeColor = Math.floor(Math.random() * colors.length)
    const changeCompliment = Math.floor(Math.random() * compliments.length)

    res.render("index", {
      newCompliment: newCompliment,
      name: name,
      bgcolor: colors[changeColor],
      compliment: compliments[changeCompliment]
    })
  }
}
