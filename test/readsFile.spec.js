let {expect} = require('chai')
let path = require('path')

let subject = require(path.join(__dirname, '..', 'lib', 'readsFile'));

describe('ReadsFile', () => {
  describe('#read', () => {
    it ('should returns the contents of the file', () => {
      let filePath = path.join(__dirname, 'data', 'accountNumbers.txt')

      let result = subject.read(filePath)

      expect(result).to.equal('foo\n')
    })

  })
});
