import React from 'react';

class ProductInvoice extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <React.Fragment>
        <div className="product-info">
          <p>{product.productName}</p>
          <p>{product.description}</p>
          <p>$ {product.price}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductInvoice;
