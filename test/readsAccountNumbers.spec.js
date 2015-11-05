require('./specHelper')

let AccountNumber = (accountNumString) => {}
AccountNumber.prototype.digits = td.function('#digits')

let subject = require('../lib/readsAccountNumbers')(AccountNumber)

describe('ReadsAccountNumbers', () => {
  describe('#read', () => {
    let filePath = getFixture('accountNumbers.txt')
    let accountNum = [1,2,3,4,5,6,7,8,9]

    it ('should return an array of objects', () => {
      let result = subject.read(filePath)

      expect(result).to.be.instanceof(Array)
    })

    it ('should return an array of objects that have digits', () => {
      td.when(AccountNumber.prototype.digits()).thenReturn(accountNum)

      let result = subject.read(filePath)

      expect(result[0].digits()).to.equal(accountNum)
    })
  })
})
