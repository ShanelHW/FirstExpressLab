const express = require("express");
const { runInNewContext } = require("vm");

const app = express()
const PORT = 3000

//greeting express application
app.get('/greeting/:name', (req, res) => {
    req.params; //name: name
    // console.log(req.params);
    res.send(`<h1> Hello, ${req.param.name}</h1>`)
})

//tip calculator
app.get(`/tip/:total/:tipPercentage`, (req, res) => {
    req.params; //total: total tipPercentage:tipPercentage
    // console.log(req.params);
    res.send(`${total * tipPercentage}`)
})

//magic 8 ball
app.get('/magic/:question', (req, res) => {
    req.params; //name: name
    // console.log(req.params);
    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let index = Math.floor(Math.random*responses.length())
    res.send(`<h1> ${responses[index]}</h1>`)
})
