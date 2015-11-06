require('./specHelper')

let subject = require('../lib/readsFile')

describe('ReadsFile', () => {
  describe('#read', () => {
    it ('should return an array of 4-line groups', () => {
      let filePath = getFixturePath('dummyData.txt')

      let result = subject.read(filePath)

      expect(result).to.be.instanceof(Array)
      expect(result[0]).to.eql(['foo', 'bar', 'baz', 'qux']) //deep equal
    })
  })
})
