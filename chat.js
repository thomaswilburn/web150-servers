var ent = require("ent");

var buffer = [];

var sendLines = function(req, response) {
  var since = req.query.since || req.body.since;
  var lines = since ? buffer.filter(function(x) { return x.timestamp > since }) : buffer;
  response.jsonp({
    lines: lines,
    at: Date.now()
  });
};

var parseInput = function(req, response) {
  var input = {
    text: ent.encode(req.body.text || ""),
    name: ent.encode((req.body.name || "Nobody").substr(0, 1000)),
    timestamp: Date.now()
  };
  if (!input.text) return;
  buffer.push(input);
  buffer = buffer.slice(-20);
  console.log("%s: %s", req.body.name, req.body.text);
};

module.exports = function(req, response) {
  if (req.method == "POST") parseInput(req, response);
  sendLines(req, response);
};
