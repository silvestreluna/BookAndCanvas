import React from 'react';

import './OrderHistory.scss';

class OrderHistory extends React.Component {
  render() {
    return (
      <div className="OrderHistory">
        <div className="order-history-header">
          <p>Order History</p>
        </div>
        <div className="invoice-header">
          <div>
          <p>Order Placed</p>
          </div>
        <div>
          <p>Total</p>
        </div>
        <div>
          <p>Shipped To</p>
        </div>
        <div>
          <p>Order# 113-7592-234563</p>
        </div>
        </div>
      </div>
    );
  }
}

export default OrderHistory;
