require('./specHelper')

let ParsesDigit = {
  parse: td.function('#parse')
}

let subject = require('../lib/parsesAccountNumber')(ParsesDigit)

let readAccountNumber = [
  '    _  _ ',
  '  | _| _|',
  '  ||_  _|'
]

let asciiForOne   = ['   ', '  |', '  |']
let asciiForTwo   = [' _ ', ' _|', '|_ ']
let asciiForThree = [' _ ', ' _|', ' _|']

describe('ParsesAccountNumber', () => {
  describe('#parse', () => {
    it('returns the digits represented by an array of ASCII strings', () => {
      td.when(ParsesDigit.parse(asciiForOne)).thenReturn("1")
      td.when(ParsesDigit.parse(asciiForTwo)).thenReturn("2")
      td.when(ParsesDigit.parse(asciiForThree)).thenReturn("3")
      let result = subject.parse(readAccountNumber)
      expect(result).to.eql("123")
    })
  })
})
