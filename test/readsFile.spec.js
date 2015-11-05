require('./specHelper')

let subject = require('../lib/readsFile')

describe('ReadsFile', () => {
  describe('#read', () => {
    it ('should returns the contents of the file as an array', () => {
      let filePath = getFixturePath('dummyData.txt')

      let result = subject.read(filePath)

      expect(result).to.be.instanceof(Array)
      expect(result[0]).to.equal('foo')
    })
  })
})
