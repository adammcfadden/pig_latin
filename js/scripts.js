var translate = function(input) {
  var inputArray = input.split(" ");
  var newArray = [];
  var arrayLength = inputArray.length;
  for (; arrayLength > 0; arrayLength--) {
    newArray.push(translateWord(inputArray.shift()));
  }
  return newArray.join(" ");
};

var translateWord = function(word) {
  var translatedWord = moveConsonants(word);
  return addAy(translatedWord);
};

var addAy = function(word) {
  return word.concat('ay');
};

var moveConsonants = function(word) {
  if (!(word.charAt(0).match(/[aeiou]/))) {
    if ((word.match(/\b[^aeio]*/)).join().includes("qu")) {
      if (word.charAt(0).match("q")) {
        word = moveQU(word);
        word = moveConsonants(word);
      } else {
        word = (word.split(/\b[^q]*/)[1] + word.match(/\b[^q]*/));
        word = moveQU(word);
      }
    } else if ((word.includes("y")) && (word.charAt(0) !== "y")){
      word = moveQU(word);
      word = (word.split(/\b[^aeiouy]*/)[1] + word.match(/\b[^aeiouy]*/));
    } else {
      word = moveQU(word);
      word = (word.split(/\b[^aeiou]*/)[1] + word.match(/\b[^aeiou]*/));
    }
  }
  return word;
};

var moveQU = function(word) {
  if (word.replace(word.slice(2), "").includes("qu")) {
    var slicedWord = word.slice(2);
    return slicedWord = slicedWord + "qu";
  } else if (word.charAt(0).match("q")) {
    var slicedWord = word.slice(1);
    return slicedWord = slicedWord + "q";
  } else {
    return word;
  }
};

$(document).ready(function() {
  $("form#translate").submit(function(event) {
    $(".entered_text").empty();
    $(".translated_text").empty();
    var enteredText = ($("input#input_text").val());
    var pigLatin = translate(enteredText);
    $(".entered_text").text(enteredText);
    $(".translated_text").text(pigLatin);
    $(".results").show();
    event.preventDefault();
  });
});
