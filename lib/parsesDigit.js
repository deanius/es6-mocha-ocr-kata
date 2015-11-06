module.exports = {
  parse(lineArray) {
    return digitMap[lineArray]
  }
}

let digitMap = new Map()
digitMap[['   ', '  |', '  |']] = "1"
digitMap[[' _ ', '|_ ', ' _|']] = "5"
