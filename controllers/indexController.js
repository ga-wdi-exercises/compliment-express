module.exports = {
    index(req, res){
        const compliments = [
            "Your instructors love you",
            "High five = ^5",
            "Is it Ruby Tuesday yet?",
            "It's almost beer o'clock",
            "The Force is strong with you"
        ];
        const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
        let randomNumber = Math.ceil(Math.random() * 3);
        let randomCompliment =  compliments[randomNumber];
        let randomColor = colors[randomNumber];
        res.send(`<body style="background:${randomColor}">
                <h1>Emergency Compliment</h1>
                <h2>${randomCompliment}</h2>
                </body>`);
    },
    show(req, res){
        const compliments = [
            "Your instructors love you",
            "High five = ^5",
            "Is it Ruby Tuesday yet?",
            "It's almost beer o'clock",
            "The Force is strong with you"
        ];
        const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
        let randomNumber = Math.ceil(Math.random() * 3);
        let randomCompliment =  compliments[randomNumber];
        let randomColor = colors[randomNumber];
        let name = req.params.name;
        res.send(`<body style="background:${randomColor}">
                <h1>${name.charAt(0).toUpperCase()+name.slice(1)}</h1>
                <h2>${randomCompliment}</h2>
                </body>`)
    }
}