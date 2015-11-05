require('./specHelper')

let subject = require('../lib/accountNumber')

xdescribe('AccountNumber', () => {
  let rawAccountNum = "123456789"
  let accountNumber = new subject()

  describe('#digits', () => {
    it ('should return an array of objects', () => {
      let result = subject.read(filePath)
      expect(result).to.be.instanceof(Array)
    })

    it ('should return an array of objects that have digits', () => {
      let result = subject.read(filePath)
      expect(result[0]).to.be.instanceof(AccountNumber)
    })
  })
})
