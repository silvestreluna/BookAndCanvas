import React from 'react';
import './CartProduct.scss';

class CartProduct extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className="cartProduct">
        <div className="product-img">img</div>
        <div className="title-user-wrapper">
          <div className="product-title">title</div>
          <div className="product-user">user</div>
        </div>
        <div className="product-qty">qty</div>
        <div className="price-dltBtn-wrapper">
        <div className="product-price">price</div>
        <div className="cart-delete-btn">btn</div>
        </div>
        {/* <p>{product.productName}</p>
        <p>{product.description}</p>
        <p>$ {product.price}</p>
        <img src={product.imgUrl} alt="product" /> */}
      </div>
    );
  }
}

export default CartProduct;
