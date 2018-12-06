/* this component fetches btc price data from coin desk, passing it to a line chart */

/* api endpoints from config */
import config from '../../config.js';

import axios from 'axios';
import React from 'react';

import LineChart from './LineChart.jsx';
import PriceDisplay from './PriceDisplay.jsx';

const PLOT_LABEL = '$USD/BTC';
const COIN_DESK_CREDIT = 'Powered by CoinDesk';

export default class BTCChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waiting: true,
      title: PLOT_LABEL,
      labels: [],
      data: [],
      credit: '',
      currentPrice: 0,
      currentPriceDisplay: '',
    };
  }

  getPrice() {
    return axios.get(`api/${config.API_BTC_PRICE}`);
  }

  getHistory() {
    return axios.get(`api/${config.API_BTC_HISTORY}`);
  }

  /* fetch btc history and current price */
  componentDidMount() {
    Promise.all([this.getPrice(), this.getHistory()])
      .then(([price, history]) => {
        const labels = Object.keys(history.data.bpi);
        const dataValues = Object.values(history.data.bpi);
        /* update state, causing render */
        this.setState({
          labels: labels,
          data: dataValues,
          credit: COIN_DESK_CREDIT,
          currentPrice: price.data.bpi.USD.rate,
          currentPriceDisplay: `${PLOT_LABEL} ${price.data.bpi.USD.rate}`,
          waiting: false,
        });
        /* Hide the Spinner */
        var spinner = document.getElementById('spinner');
        spinner.style.display = 'none';
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <PriceDisplay label={this.state.currentPriceDisplay} />
        <LineChart
          id={'btcChart'}
          waitForUpdate={true} // prevent rendering before data fetching
          title={this.state.title}
          data={this.state.data}
          labels={this.state.labels}
          currentPrice={this.state.currentPrice}
        />
        <span>{this.state.credit}</span>
      </div>
    );
  }
}
