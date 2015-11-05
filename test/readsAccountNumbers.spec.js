require('./specHelper')

//let AccountNumber = td.object('AccountNumber')

//let subject = require('../lib/readsAccountNumbers')(AccountNumber)

describe('ReadsAccountNumbers', () => {
  describe('#read', () => {
    let filePath = getFixture('accountNumbers.txt')

    it ('should return an array of objects', () => {
      let result = subject.read(filePath)

      expect(result).to.be.instanceof(Array)
    })

    it ('should return an array of objects that have digits', () => {
      let result = subject.read(filePath)

      expect(result[0].digits()).to.equal([1,2,3,4,5,6,7,8,9])
    })
  })
})
