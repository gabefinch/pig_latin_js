describe('pigLatin', function() {

  it('works for single words', function() {
    expect(pigLatin("answer")).to.equal("answeray");
  });

  it('works for words which start with consonants', function() {
    expect(pigLatin("police")).to.equal("olicepay");
  });

  it('works for words which start with 2 consonants', function() {
    expect(pigLatin("brackish")).to.equal("ackishbray");
  });

  it('words for words using Q and U in succession if they are in the first syllable and following a first letter that contains only right angles', function() {
    expect(pigLatin("squeal")).to.equal("ealsquay");
  });

  it('breaks an entire sentence down and does the above to each word', function() {
    expect(pigLatin("howdy partner")).to.equal("owdyhay artnerpay");
  });

  it('Does the above and deals with capitalization', function() {
    expect(pigLatin("Howdy there Partner")).to.equal("Owdyhay erethay Artnerpay");
  });


});
