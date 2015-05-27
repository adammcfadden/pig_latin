var translate = function(word) {
  var translatedWord = word
  if (!(word.charAt(0).match("q"))) {
    translatedWord = moveConsonants(word);
  } else {
    translatedWord = moveQU(translatedWord);
    translatedWord = moveConsonants(translatedWord);
  }
  return addAy(translatedWord);
};

var addAy = function(word) {
  return word.concat('ay');
};

var moveConsonants = function(word) {
  if (!(word.charAt(0).match(/[aeiou]/))) {
    if ((word.match(/\b[^aeio]*/)).join().includes("qu")) {
      word = (word.split(/\b[^q]*/)[1] + word.match(/\b[^q]*/));
      word = moveQU(word);
    } else {
      word = (word.split(/\b[^aeiou]*/)[1] + word.match(/\b[^aeiou]*/));
    }
  }
  return word
};

var moveQU = function(word) {
  if (word.charAt(1).match("u")) {
    var slicedWord = word.slice(2)
    return slicedWord = slicedWord + "qu"
  }
  else {
    var slicedWord = word.slice(1)
    return slicedWord = slicedWord + "q"
  }
};
