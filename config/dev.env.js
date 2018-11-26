'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  AXIOS_BASE_URL: '"http://busc.4ggogo.com/cmiyun"',
  // AXIOS_BASE_URL: '"http://192.168.53.170:8089/cmiyun"'
})
