var piggify = function(word) {
  var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var capitalized = (caps.indexOf(word[0]) !== -1)
  word = word.toLowerCase();

  if (word[0].concat(word[1]) === "qu") {
    var first_letter = "qu";
    var second_letter = word[2];
    var start_length = 3;
  }
  else if (word[1].concat(word[2]) === "qu") {
    var first_letter = word[0];
    var second_letter = "qu";
    var start_length = 3;
  }
  else {
    var first_letter = word[0];
    var second_letter = word[1];
    var start_length = 2;
  }

  var vowels = 'aeiou'
  if ((vowels.indexOf(first_letter) === -1) && (vowels.indexOf(second_letter) === -1))  {
    var mod_word = word.slice(start_length).concat(first_letter).concat(second_letter);
  }
  else if (vowels.indexOf(first_letter) === -1) {
    var mod_word = word.slice(start_length-1).concat(first_letter);
  }
  else {
    var mod_word = word;
  }

  if (capitalized) {
    mod_word = mod_word[0].toUpperCase() + mod_word.slice(1);
  }

  mod_word = mod_word.concat("ay");
  return mod_word;

};


var pigLatin = function(phrase) {
  var words = phrase.split(" ");
  var mod_words = [];
  words.forEach(function(word) {
    mod_words.push(piggify(word));
  });
  return mod_words.join(" ");
};
