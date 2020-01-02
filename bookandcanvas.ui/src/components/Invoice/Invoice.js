import React from 'react';
import ProductInvoice from './ProductInvoice';
import './Invoice.scss';

class Invoice extends React.Component {
  state = {
    productName: '',
    productDesc: '',
    productImgUrl: '',

  }

  render() {
    const invoiceData = this.props.inv;
    const { user } = this.props;

    const prodImgStyle = {
      backgroundImage: `url(${invoiceData.artWork[0].imgUrl})`,
      backgroundRepeat: 'no-Repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    };

    const prodInfo = invoiceData.artWork.map((product) => <ProductInvoice key={product.id} product={product} />);

    return (
      <div className="invoice">
        <div className="invoice-header">
          <div>
            <p>Order Placed</p>
            <p>{invoiceData.date}</p>
          </div>
          <div>
            <p>Total</p>
            <p>{invoiceData.total}</p>
          </div>
          <div>
            <p>Shipped To</p>
            <p>{user.fName} {user.lName}</p>
          </div>
          <div>
            <p>Order #</p>
            <p>{invoiceData.id}</p>
          </div>
        </div>
        <div className="invoice-content">
          <div className="product-img" style={prodImgStyle}>
          </div>
          <div className="product-details">
            <div className="product-and-user-wrapper">
              {(invoiceData.artWork[0])
                ? (<p>{invoiceData.artWork[0].productName}</p>)
                : ('')}
              <p>{user.fName}</p>
            </div>
            <div className="total-price-wrapper">
              <p>Total</p>
              <p>{invoiceData.total}</p>
              <div>
                <button>Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Invoice;
