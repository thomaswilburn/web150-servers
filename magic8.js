var answers = [
  {answer: "It is certain", category: "yes" },
  { answer: "It is decidedly so", category: "yes" },
  { answer: "Without a doubt", category: "yes" },
  { answer: "Yes definitely", category: "yes" },
  { answer: "You may rely on it", category: "yes" },
  { answer: "As I see it, yes", category: "yes" },
  { answer: "Most likely", category: "yes" },
  { answer: "Outlook good", category: "yes" },
  { answer: "Yes", category: "yes" },
  { answer: "Signs point to yes", category: "yes" },
                                        
  { answer: "Reply hazy try again", category: "maybe" },
  { answer: "Ask again later", category: "maybe" },
  { answer: "Better not tell you now", category: "maybe" },
  { answer: "Cannot predict now", category: "maybe" },
  { answer: "Concentrate and ask again", category: "maybe" },
                                                            
  { answer: "Don't count on it", category: "no" },
  { answer: "My reply is no", category: "no" },
  { answer: "My sources say no", category: "no" },
  { answer: "Outlook not so good", category: "no" },
  { answer: "Very doubtful", category: "no" }
]

module.exports = function(req, response) {

  var selection = answers;
  if (req.query.category) {
    selection = answers.filter(function(d) { return d.category == req.query.category });
  }
  var answer = selection[Math.floor(Math.random() * selection.length)];
  response.jsonp(answer);
  
};
