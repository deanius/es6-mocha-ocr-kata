let chop = require('underscore.string/chop')
let zip  = require('lodash').zip

module.exports = (ParsesDigit) => {
  return {
    parse: (rawAccountNumber) => {
      let tops    = chop(rawAccountNumber[0], 3)
      let middles = chop(rawAccountNumber[1], 3)
      let bottoms = chop(rawAccountNumber[2], 3)
      return zip(tops, middles, bottoms).map(thing => ParsesDigit.parse(thing)).join('')
    }
  }
}
