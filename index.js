var chat = require("./chat");
var social = require("./social");

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var server = app.listen(3000);

app.all("*", function(req, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  response.header("Access-Control-Allow-Headers", req.get("Access-Control-Request-Headers"));
  next();
});

app.route("/chat").get(chat).post(chat);
app.get("/social", social);
