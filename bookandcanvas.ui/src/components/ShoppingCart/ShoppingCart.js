import React from 'react';
import data from '../../helpers/data/productRequests';
import CartProduct from '../CartProduct/CartProduct';

import './ShoppingCart.scss';

class ShoppingCart extends React.Component {
  state = {
    products: [],
  }

  getShoppingCartProducts = () => {
    data.getProductsById(6)
      .then((resp) => {
        this.setState({ products: resp.data });
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getShoppingCartProducts();
  }

  render() {
    const { products } = this.state;

    const displayProducts = products.map((prod) => <CartProduct key={prod.id} product={prod}/>);

    return (
      <div className="shoppingCart">
        <div className="cart-header">Shopping Cart</div>
        <div className="summary">
          <div className="summary-wrapper">
            <div>
              <p>Summary</p>
            </div>
            <div className="summary-content">
              <div className="subtotal">
                <p>Subtotal</p>
                <p>$1.99</p>
              </div>
              <div className="service-fees">
                <p>Service Fee</p>
                <p>$4.50</p>
              </div>
              <div className="total">
                <p>Total</p>
                <p>$23.00</p>
              </div>
            </div>
            <div className="order-now-btn">
              <button>Order Now</button>
            </div>
          </div>
        </div>
        <div className="products">
          { displayProducts }
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
