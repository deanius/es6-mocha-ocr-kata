require ('./specHelper')

let AccountNumber = require('../lib/AccountNumber')

let ParsesDigit = () => {}
ParsesDigit.prototype.parse = td.function('ParsesDigit#parse')

let subject = require('../lib/ParsesAccountNumber')(AccountNumber, ParsesDigit)

describe('ParsesAccountNumber', () => {
  describe('#parse', () => {
    td.when(ParsesDigit.prototype.parse(td.matchers.isA(Array))).thenReturn("1")
    let rawAccountNumber = [
      ' _  _  _  _  _  _  _  _  _',
      ' _| _| _| _| _| _| _| _| _|',
      '|_ |_ |_ |_ |_ |_ |_ |_ |_'
    ]
    let rawAccountNumberShort = [
      ' _  _  _ ',
      ' _| _| _|',
      '|_ |_ |_'
    ]

    it('should parse a 9 digit number', () => {
      let result = subject.parse(rawAccountNumber)
      expect(result).to.be.instanceof(AccountNumber)
      expect(result.digits).to.equal('111111111')
    })

    it('should parse a shorter number', () => {
      let result = subject.parse(rawAccountNumberShort)
      expect(result).to.be.instanceof(AccountNumber)
      expect(result.digits).to.equal('111')
    })
  })
})