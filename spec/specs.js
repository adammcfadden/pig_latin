describe('translate', function() {
  it('will add \'ay\' to a vowel', function() {
    var word = "e";
    expect(translate(word)).to.equal("eay");
  });

  it('will remove the first consonant, move it to the end, and add ay after that', function() {
    var word = "dog";
    expect(translate(word)).to.equal("ogday");
  });

  it('will remove the first consonants, move them to the end of the string, and add ay to the end', function() {
    var word = "ghost";
    expect(translate(word)).to.equal("ostghay");
  });

  it('will move u along with q if at the beginning of the word', function() {
    var word = "quake";
    expect(translate(word)).to.equal("akequay");
  });

  it('will move u along with q if at the beginning of the word, and all following consonants', function() {
    var word = "qutake";
    expect(translate(word)).to.equal("akequtay");
  });

  it('will still move q if not follwed by a u', function() {
    var word = "qtake";
    expect(translate(word)).to.equal("akeqtay");
  });

  it('will move qu if contained in the first consonants', function() {
    var word = "squeal";
    expect(translate(word)).to.equal("ealsquay");
  });

  it('will treat "y" as a consonant and move it to the end if it starts a word', function() {
    var word = "yellow";
    expect(translate(word)).to.equal("ellowyay");
  });

  it('will treat "y" as a vowel and not move it to the end', function() {
    var word = "by";
    expect(translate(word)).to.equal("ybay");
  });

  it('will treat "y" as a vowel and not move it to the end if it is in the middle of a word', function() {
    var word = "bys";
    expect(translate(word)).to.equal("ysbay");
  });

  it('will convert a sentence to pig latin', function() {
    var sentence = "This is Pig Latin";
    expect(translate(sentence)).to.equal("isThay isay igPay atinLay");
  });
});
