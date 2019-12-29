import React from 'react';

class Invoice extends React.Component {
  render() {
    const invoiceData = this.props.inv;
    return (
      <div>
        <h1>{invoiceData.date}</h1>
        {console.error(invoiceData.artWork[0])}
      </div>
    );
  }
}

export default Invoice;
