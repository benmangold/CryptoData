/* CryptoPrices chart component */
import React from 'react';

import chartjs from 'chart.js';

export default class LineChart extends React.Component {

  createChart() {
    var ctx = document.getElementById(this.props.id).getContext('2d');
    new chartjs(ctx, {
      type: 'line',
      data: {
        labels: this.props.labels,
        datasets: [
          {
            label: this.props.title,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: this.props.data,
          },
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
        {/* chart renders canvas */}
        <canvas id={this.props.id} />
      </div>
    );
  }
}
