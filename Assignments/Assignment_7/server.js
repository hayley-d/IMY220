"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = 3000;
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send('Hello world');
});
app.listen(PORT, function () {
    console.log("Server running on http://localhost:".concat(PORT));
});
