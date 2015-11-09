let chop = require('underscore.string/chop')
let {zip} = require('lodash')

module.exports = (AccountNumber, ParsesDigit) => {
  return {
    parse(rawAccountNumber){
      let tops    = chop(rawAccountNumber[0], 3)
      let middles = chop(rawAccountNumber[1], 3)
      let bottoms = chop(rawAccountNumber[2], 3)
      let digits = zip(tops, middles, bottoms)
        .map(digit => new ParsesDigit().parse(digit))
        .join('')
      return new AccountNumber(digits)
    }
  }
}