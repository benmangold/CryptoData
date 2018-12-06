/* Header with current price */

import React from 'react';

export default ({ label, price }) => {
  return (
    <div>
      <h1>{label} {price}</h1>
    </div>
  );
};
