module.exports = () => {
  return {
    parse(digitLines) {
      return digitMap[digitLines]
    }
  }
}

let digitMap = {}
digitMap[[
  '   ',
  '  |',
  '  |']] = "1"

digitMap[[
  ' _ ',
  ' _|',
  '|_ ']] = "2"

digitMap[[
  ' _ ',
  ' _|',
  ' _|']] = "3"

digitMap[[
  '   ',
  '|_|',
  '  |']] = "4"

digitMap[[
  ' _ ',
  '|_ ',
  ' _|']] = "5"

digitMap[[
  ' _ ',
  '|_ ',
  '|_|']] = "6"

digitMap[[
  ' _ ',
  '  |',
  '  |']] = "7"

digitMap[[
  ' _ ',
  '|_|',
  '|_|']] = "8"

digitMap[[
  ' _ ',
  '|_|',
  ' _|']] = "9"
