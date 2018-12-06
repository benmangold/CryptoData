/* entry point for server */

const path = require('path')

const { PORT, CRYPTO_COMPARE_ENUM, COIN_DESK_ENUM } = require('../config.js');
const { logger } = require('./logger');

// routerFactory takes a configured API enum as an argument
// CoinDesk will be used by default
const { routerFactory } = require('./router')

const express = require('express');
const app = express();

/* static file routes /index.html, /bundle.js */
app.use(express.static(path.resolve('public')))

/* api routes */
app.use('/api', routerFactory(COIN_DESK_ENUM))

app.use('/api', routerFactory(CRYPTO_COMPARE_ENUM))

app.listen(PORT, () => {
  logger.info(`app listening on ${PORT}`);
});
