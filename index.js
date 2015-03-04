var chat = require("./chat");
var social = require("./social");

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var server = app.listen(3000);

app.use(bodyParser.json({ type: "application/*" }));
app.use(bodyParser.json({ type: "text/*" }));
app.use(bodyParser.json({ type: "json" }));

app.all("*", function(req, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  response.header("Access-Control-Allow-Headers", req.get("Access-Control-Request-Headers"));
  next();
});

app.route("/chat").get(chat).post(chat);
app.get("/social", social);
