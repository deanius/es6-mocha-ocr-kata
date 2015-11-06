require ('./specHelper')

let subject = require('../lib/ParsesDigit')()

let asciiForOne   = [
  '   ',
  '  |',
  '  |']

let asciiForTwo   = [
  ' _ ',
  ' _|',
  '|_ ']

describe('ParsesDigit', () => {
  describe('#parse', () => {
    it('should return the digit for 1', () => {
      let result = subject.parse(asciiForOne)
      expect(result).to.eq("1")
    });
    it('should return the digit for 2', () => {
      let result = subject.parse(asciiForTwo)
      expect(result).to.eq("2")
    });
  });
});