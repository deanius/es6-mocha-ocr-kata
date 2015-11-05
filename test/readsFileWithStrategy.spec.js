require('./specHelper')

let subject = require('../lib/readsFileWithStrategy')

describe('ReadsFileWithStrategy', () => {
  describe('#read', () => {
    context('splitting on every line', () => {
      let splitEveryLine = 

      it ('should returns the contents of the file as an array', () => {
        let filePath = getFixturePath('dummyData.txt')

        let result = subject.read(filePath, splitEveryLine)

        expect(result).to.be.instanceof(Array)
        expect(result[0]).to.equal('foo')
      })
    })

    context('splitting every 4 lines', () => {
      let splitEvery4Lines = (contents) => contents.split('\n')

      it ('should returns the contents of the file as an array', () => {
        let filePath = getFixturePath('dummyData.txt')

        let result = subject.read(filePath, splitEvery4Lines)

        expect(result).to.be.instanceof(Array)
        expect(result[0]).to.equal('foo\nbaz\nbar\nqux')
      })
    })

  })
})
