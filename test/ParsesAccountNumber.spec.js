require('./specHelper')

let subject = require('../lib/parsesAccountNumber')

let lineArray = (`
    _  _     _  _  _  _  _
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|

`).replace(/^\n/, '').split('\n')

let digits = "123456789"

describe('ParsesAccountNumber', () => {
  it('returns the digits represented by an array of ASCII strings', () => {
    let result = subject(lineArray)
    expect(result).to.eql(digits)
  })
})
