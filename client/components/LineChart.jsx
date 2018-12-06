/* chartjs component */

/* Plot History Data and Current Price on a Chart */

import React from 'react';

import chartjs from 'chart.js';

export default class LineChart extends React.Component {

  createChart() {
    // remove commas from current price
    let currentPrice = parseFloat(this.props.currentPrice.replace(/,/g, '')) 
    // fetch canvas with props.id
    var ctx = document.getElementById(this.props.id).getContext('2d');
    new chartjs(ctx, {
      type: 'line',
      data: {
        labels: this.props.labels,
        datasets: [
          {
            label: 'Current Price',
            borderColor: 'rgb(255, 255, 255)',
            data: [currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice, currentPrice],
          },
          {
            label: this.props.title,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 255, 255)',
            data: this.props.data,
          }
        ],
      },
      options: {},
    });
  }

  componentDidUpdate() {
    this.createChart()
  }

  componentDidMount() {
    if (!this.props.waitForUpdate) {
      this.createChart()
    }
  }
  render() {
    return (
      <div>
        <canvas id={this.props.id} />
      </div>
    );
  }
}
