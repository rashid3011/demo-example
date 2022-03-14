const express = require("express");
const routes = require("./routes");

const app = express();

app.use('/', routes);

app.use('/', (req, res) => {
    res.send("Test API of Home page")
})

module.exports  = app;