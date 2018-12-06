/* exports api routes factory, uses coin desk by default */

const { COIN_DESK_ENUM, CRYPTO_COMPARE_ENUM, DEFAULT_API } = require('../../config.js')

const express = require('express')
const {logger} = require('../logger')
const router = express.Router()

const CoinDeskRouter = require('./CoinDeskAPI').router
const CryptoCompareRouter = require('./CryptoCompareAPI').router

/* api root */
router.get('/', function (req, res) {
  res.send('CryptoPrice API')
})

function apiRouter(api = DEFAULT_API) {
  if (api === COIN_DESK_ENUM) {
    logger.info('coin desk api selected')
    return router.use(CoinDeskRouter)
  } else if (api === CRYPTO_COMPARE_ENUM) {
    logger.info('crypto compare api selected')
    return router.use(CryptoCompareRouter)
  }
}

module.exports.routerFactory = apiRouter