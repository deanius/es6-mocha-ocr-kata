let fs = require('fs')

let ReadsFile = {
  read(filePath) {
    return fs.readFileSync(filePath, 'utf8')
  }
}
module.exports = ReadsFile
