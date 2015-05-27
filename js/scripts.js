var translate = function(word) {
  var flippedWord = word;
  if (!(word.charAt(0).match(/[aeiou]/))) {
    flippedWord = moveConsonants(word);
  }
  return addAy(flippedWord);
};

var addAy = function(word) {
  return word.concat('ay');
};

var moveConsonants = function(word) {
  return (word.split(/\b[^aeiou]*/)[1] + word.match(/\b[^aeiou]*/));
};
