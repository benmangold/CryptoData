/* server data api */
const { COIN_DESK_ENUM, CRYPTO_COMPARE_ENUM, DEFAULT_API } = require('../../config.js')

const express = require('express')
const router = express.Router()

const CoinDeskRouter = require('./CoinDeskAPI').router

/* api root */
router.get('/', function (req, res) {
  res.send('CryptoPrice API')
})

function apiRouter(api = DEFAULT_API) {
  if (api === COIN_DESK_ENUM) {
    console.log('coin desk api selected')
    return router.use(CoinDeskRouter)
  } else if (api === CRYPTO_COMPARE_ENUM) {
    console.log('crypto compare api selected')
  }
}

module.exports.routerFactory = apiRouter