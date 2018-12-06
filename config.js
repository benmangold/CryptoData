/* global config */

const CRYPTO_COMPARE_API_KEY = require('./secure.config.json')[
  'CRYPTO_COMPARE_API_KEY'
];

const CC_KEY = `&api_key=${CRYPTO_COMPARE_API_KEY}`;

module.exports = {
  // app configuration
  PORT: 8080,
  DEFAULT_API: 'CoinDesk',
  // application data api endpoints
  API_BTC_PRICE: '/btc/price',
  API_BTC_HISTORY: '/btc/history',
  // coin desk api
  COIN_DESK_ENUM: 'CoinDesk',
  CD_BTC_PRICE: 'https://api.coindesk.com/v1/bpi/currentprice.json',
  CD_BTC_HISTORY: 'https://api.coindesk.com/v1/bpi/historical/close.json',
  // crypto compare api
  CRYPTO_COMPARE_ENUM: 'Crypto Compare',
  CRYPTO_COMPARE_API: 'https://min-api.cryptocompare.com/data/',
  CC_BTC_HISTORY: `https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=11${CC_KEY}`,
  CC_ETH_HISTORY: `https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=11${CC_KEY}`,
};
