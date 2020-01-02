import React from 'react';

class ProductInvoice extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <React.Fragment>
        <p>{product.productName}</p>
      </React.Fragment>
    );
  }
}

export default ProductInvoice;
