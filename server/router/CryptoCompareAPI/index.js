/* TODO: implement routes for CryptoCompare api - btc, eth, ltc, zec, etc. */
const { CC_ETH_HISTORY, API_ETH_HISTORY } = require('../../../config.js')

const axios = require('axios')
const express = require('express')
const router = express.Router()

router.get(API_ETH_HISTORY, (req, res) => {
  axios.get(CC_ETH_HISTORY).then(({ data }) => {
    res.send(data)
  }).catch((err) => {
    res.status(500).send(err)
  })
})

module.exports.router = router