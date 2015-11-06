require('./specHelper')

let subject = require('../lib/parsesDigit')

let asciiForOne   = ['   ', '  |', '  |']
let asciiForFive  = [' _ ', '|_ ', ' _|']

describe('ParsesDigit', () => {
  describe('#parse', () => {
    it('should parse 1', () => {
      let result = subject.parse(asciiForOne)
      expect(result).to.eql("1")
    })
    it('should parse 5', () => {
      let result = subject.parse(asciiForFive)
      expect(result).to.eql("5")
    })
  })
})
