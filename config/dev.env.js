var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  testVar: '"develop"',
  imgLocalUrl: '"http://localhost:53912/"'
})
