/* routes to coindesk btc data api */

const { API_BTC_HISTORY, API_BTC_PRICE, CD_BTC_PRICE, CD_BTC_HISTORY } = require('../../../config.js')
const { logger } = require('../../logger')

const axios = require('axios')
const express = require('express')
const router = express.Router()

router.get(API_BTC_PRICE, function (req, res) {
  logger.info('CoinDesk API Get BTC Price')
  axios.get(CD_BTC_PRICE)
  .then(({data}) => {
    logger.info(data)
    res.send(data)
  }).catch((e) => {
    logger.error(e)
    res.status(500).send()
  })
})

router.get(API_BTC_HISTORY, function (req, res) {
  logger.info('CoinDesk API Get BTC History')

  axios.get(CD_BTC_HISTORY)
  .then(({data}) => {
    logger.info(data)
    res.send(data)
  }).catch((e) => {
    logger.error(e)
    res.status(500).send()
  })
})

module.exports.router = router