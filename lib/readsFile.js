let fs = require('fs')
let _ = require('lodash')


let ReadsFile = {
  read(filePath) {
    let lines = fs.readFileSync(filePath, 'utf8')
      .replace(/\n$/, '')
      .split('\n')
    return _.chunk(lines, 4).map( lineArray => lineArray.slice(0, 3))
  }
}
module.exports = ReadsFile
