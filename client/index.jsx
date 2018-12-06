/* entry point for CryptoPrices app */

import BTCChart from './components/BTCChart.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <BTCChart/>
  </div>,
  document.getElementById('root')
);
