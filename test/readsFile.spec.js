require('./specHelper')

let subject = require('../lib/readsFile')

describe('ReadsFile', () => {
  describe('#read', () => {
    it ('should returns the contents of the file', () => {
      let filePath = getFixture('dummyData.txt')

      let result = subject.read(filePath)

      expect(result).to.equal('foo\n')
    })
  })
})
