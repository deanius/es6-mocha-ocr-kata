require('./specHelper')

let AccountNumber = () => {}

let ReadsFile = () => {}
ReadsFile.prototype.read = td.function('#read')

let subject = require('../lib/ReadsAccountNumbers')(ReadsFile, AccountNumber)

describe('ReadsAccountNumbers', () => {
  describe('#read', () => {
    let filePath = 'accountNumbers.txt'
    let accountFileContents = [
      '123456789',
      '222222229'
    ]
    td.when(ReadsFile.prototype.read(filePath)).thenReturn(accountFileContents)

    it('should return an array of AccountNumbers', () => {
      let result = subject.read(filePath)

      expect(result).to.be.instanceof(Array)
      expect(result[0]).to.be.instanceof(AccountNumber)
    });
  });
})
