import React from 'react';
import moment from 'moment';
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
            <p>{moment(invoiceData.date).format('LL')}</p>
          </div>
          <div>
            <p>Total</p>
            <p>{`$${invoiceData.total}`}</p>
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
              <p>{invoiceData.artWork[0].productName}</p>
              <div className="user">
                <img src={user.imgUrl} alt="user avatar" />
                <p>{user.fName} {user.lName}</p>
              </div>
            </div>
            <div className="total-price-wrapper">
              <p>Total</p>
              <p>{`$${invoiceData.artWork[0].price}`}</p>
              <div className="detail-btn">
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
