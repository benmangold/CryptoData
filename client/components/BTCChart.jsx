/* btc price history */

/* this component fetches price data, passing it to a line chart */

import axios from 'axios';
import chartjs from 'chart.js';
import React from 'react';

import LineChart from './LineChart.jsx';
import PriceDisplay from './PriceDisplay.jsx';
import Spinner from './Spinner.jsx';

/* api endpoints from config */
import config from '../../config.js';

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
  /* TODO - refactor to GraphQL */
  componentDidMount() {
    Promise.all([this.getPrice(), this.getHistory()])
      .then(([price, history]) => {
        const labels = Object.keys(history.data.bpi);
        const dataValues = Object.values(history.data.bpi);
        this.setState({
          labels: labels,
          data: dataValues,
          credit: COIN_DESK_CREDIT,
          currentPriceDisplay: `${PLOT_LABEL} ${price.data.bpi.USD.rate}`,
          waiting: false,
        });
        console.log(document.getElementById('spinner'));
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
        {/* {this.state.waiting ? <Spinner/> : undefined} */}
        <PriceDisplay label={this.state.currentPriceDisplay} />
        <LineChart
          id={'btcChart'}
          waitForUpdate={true} // prevent rendering before data
          title={this.state.title}
          data={this.state.data}
          labels={this.state.labels}
        />
        <span>{this.state.credit}</span>
      </div>
    );
  }
}
