var fs = require("fs");
var manifestoRaw = fs.readFileSync("manifesto.txt", "utf8");
var snopes = require("./snopes.json");
var manifesto = manifestoRaw
  .replace(/^[IVX\dA-Z]+\.\s/gm, "")
  .replace(/( [A-Z]{2,})/gm, "")
  .replace(/[\n\r]+/g, " ")
  .replace(/([\.\!\?]) /g, function(match) { return match + "\t" })
  .split(/\t/)
  .filter(function(s) { return s && s.length < 140 });
manifesto = manifesto.map(function(sentence) { return sentence.trim().replace(/^[IVX]+\s+/, "") });

var getStatus = function() {
  var marx = manifesto[Math.floor(Math.random() * manifesto.length)];
  var snope = snopes[Math.floor(Math.random() * snopes.length)];
  var pair;
  if (Math.random() > .5) {
    pair = [marx, snope];
  } else {
    pair = [snope, marx];
  }
  return pair.join(" ");
}

module.exports = function(req, response) {
  var length = req.query.length || 20;
  var updates = [];
  for (var i = 0; i < length; i++) {
    updates.push(getStatus());
  }
  updates = updates.map(function(u) {
    return {
      name: "Karl Snopes",
      status: u
    }
  });
  response.jsonp({
    updates: updates
  });
};