
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./q2-ui.cjs.production.min.js')
} else {
  module.exports = require('./q2-ui.cjs.development.js')
}
