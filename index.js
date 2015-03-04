var chat = require("./chat");
var social = require("./social");

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var server = app.listen(3000);

app.route("/chat").get(chat).post(chat);
app.get("/social", social);