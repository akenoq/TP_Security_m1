"use strict";

const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));

app.get('/', function(req, res) {
    res.sendfile("static/api.html");
});

app.get('/xxe', function(req, res) {
    res.sendfile("static/xxe.xml");
});

app.get('/rss', function(req, res) {
    res.sendfile("static/rss.rss");
});

app.get('/rss-xxe', function(req, res) {
    res.sendfile("static/rss-xxe.rss");
});

app.get('/txt', function(req, res) {
    res.sendfile("static/text.txt");
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log("Server works on port " + port);
