describe('translate', function() {
  it('will add \'ay\' to a vowel', function() {
    var word = "e";
    expect(translate(word)).to.equal("eay");
  });

  it('will remove the first consonant, move it to the end, and add ay after that', function() {
    var word = "dog";
    expect(translate(word)).to.equal("ogday");
  });
});
