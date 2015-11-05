let {expect} = require('chai')
let path = require('path')

let subject = require(path.join(__dirname, '..', 'lib', 'readsFile'));

describe('ReadsFile', () => {

  it('should be defined', () => {
    expect(subject).to.exist
  })
});
