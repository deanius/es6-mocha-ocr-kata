global.expect = require('chai').expect
global.td = require('testdouble')
global.getFixturePath = path => require('path').join(__dirname, 'data', path)
