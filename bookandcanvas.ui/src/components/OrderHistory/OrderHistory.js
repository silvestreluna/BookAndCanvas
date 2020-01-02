import React from 'react';
import invData from '../../helpers/data/invoiceRequest';
import userData from '../../helpers/data/addUser';
import Invoice from '../Invoice/Invoice';

import './OrderHistory.scss';

class OrderHistory extends React.Component {
  state = {
    userInvoices: [],
    userProductForInv: [],
    user: {},
  }

  getUser = () => {
    userData.getUserById(1)
      .then((resp) => {
        this.setState({ user: resp.data });
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getUser();
    invData.getuserInvoices()
      .then((resp) => {
        this.setState({ userInvoices: resp });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { userInvoices, user } = this.state;
    const eachInvoice = userInvoices.map((inv) => <Invoice key={inv.id} inv={inv} user={user}/>);

    return (
      <div className="OrderHistory">
        <div className="order-history-header">
          <p>OrderHistory</p>
        </div>
          {eachInvoice}
      </div>
    );
  }
}

export default OrderHistory;
