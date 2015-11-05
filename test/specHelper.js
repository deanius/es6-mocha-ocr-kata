global.expect = require('chai').expect
global.td = require('testdouble')
global.getFixture = path => require('path').join(__dirname, 'data', path)
