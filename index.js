"use strict";

const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));

app.get('/xxe', function(req, res) {
    res.sendfile("static/xxe.xml");
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log("Server works on port " + port);
