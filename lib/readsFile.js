let fs = require('fs')

let ReadsFile = {
  read(filePath) {
    return fs.readFileSync(filePath, 'utf8').replace(/\n$/, '').split('\n')
  }
}
module.exports = ReadsFile
