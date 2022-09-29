const express = require("express");
const { runInNewContext } = require("vm");

const app = express()
const PORT = 3000

//greeting express application
app.get('/greeting/:name', (req, res)) => {
    req.params; //name: name
    console.log(req.params);
    res.send(`<h1> Hello, {req.param.name}</h1>`)
}