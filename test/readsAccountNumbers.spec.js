require('./specHelper')

let AccountNumber = () => {}
let FileReader = () => {}
FileReader.prototype.read = td.function('#read')

let subject = require('../lib/readsAccountNumbers')(new FileReader(), AccountNumber)

describe('ReadsAccountNumbers', () => {
  describe('#read', () => {
    let filePath = getFixturePath('accountNumbers.txt')
    let accountFileContents = [
      '123456789',
      '987654321'
    ]
    td.when(FileReader.prototype.read(filePath)).thenReturn(accountFileContents)

    it ('should return an array of AccountNumbers', () => {
      let result = subject.read(filePath)
      expect(result[0]).to.be.instanceof(AccountNumber)
    })
  })
})
