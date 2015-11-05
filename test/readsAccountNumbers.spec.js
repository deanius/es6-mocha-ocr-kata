require('./specHelper')

let subject = require('../lib/readsAccountNumbers')

describe('ReadsAccountNumbers', () => {
  describe('#read', () => {
    let filePath = getFixture('accountNumbers.txt')

    it ('should return an array of objects', () => {
      let result = subject.read(filePath)

      expect(result).to.be.instanceof(Array)
    })
  })
})
