require('./specHelper')

let subject = require('../lib/accountNumber')

let lineArray = (`
    _  _     _  _  _  _  _
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|

`).replace(/^\n/, '').split('\n')

let digits = "123456789"

describe('AccountNumber', () => {
  describe('#digits', () => {
    it('returns the digits represented by an array of ASCII strings', () => {
      let accountNumber = subject(lineArray)
      let result = accountNumber.digits()
      expect(result).to.eql(digits)
    })
  })
})
