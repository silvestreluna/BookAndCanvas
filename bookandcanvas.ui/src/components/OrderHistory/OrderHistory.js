import React from 'react';
import invData from '../../helpers/data/invoiceRequest';
import Invoice from '../Invoice/Invoice';

import './OrderHistory.scss';

class OrderHistory extends React.Component {
  state = {
    userInvoices: [],
    userProductForInv: [],
  }

  componentDidMount() {
    invData.getuserInvoices()
      .then((resp) => {
        this.setState({ userInvoices: resp });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { userInvoices } = this.state;
    const eachInvoice = userInvoices.map((inv) => <Invoice key={inv.id} inv={inv} />);

    return (
      <div className="OrderHistory">
        <div className="order-history-header">
          <p>OrderHistory</p>
        </div>
        <div className="invoice-header">
          <div>
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
        <div>
          {eachInvoice}
        </div>
      </div>
    );
  }
}

export default OrderHistory;
