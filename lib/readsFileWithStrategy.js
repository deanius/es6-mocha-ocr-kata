let fs = require('fs')

module.exports = {
  read(filePath, splitFn) {
    return splitFn(fs.readFileSync(filePath, 'utf8').replace(/\n$/, ''))
  }
}
