# CryptoPrices
by Ben Mangold

![CryptoPrices Loading on Fast 3G](https://www.dropbox.com/s/dn4clj27iq3xp1c/CrytoPrice_12-6.gif?dl=0)

A Plot of Crypto Daily BTC Prices

React, Chart.js, Express

## Development Setup

CryptoPrices uses Webpack with Babel to prepare bundle.js for the client

To work on the client locally, run 

`npm run react-dev`

To work on the server/api locally, run 

`npm run server-dev`

Run both commands in the terminal and you're good to make some changes and see the results

## API

There is an API implemented to pull BTC price and history accessible from

`/api/btc/price`

`/api/btc/history`

`/api/eth/history`

It currently uses the CoinDesk api.  Thanks CoinDesk!

## LineChart Component Props and Usage

```
  <LineChart 
    waitForUpdate={false}
    id='lineChart' 
    title={'Line Chart Cpt'} 
    labels={['a', 'b', 'c']} 
    data={[1,2,3]}
    />
```