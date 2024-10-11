"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(PORT, function () {
    console.log("Server running on http://localhost:".concat(PORT));
});
