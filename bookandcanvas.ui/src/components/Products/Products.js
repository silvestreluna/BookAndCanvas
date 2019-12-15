import React from 'react';
import ProductTile from '../ProductTile/ProductTile';

import './Products.scss';

class Products extends React.Component {
  buildProductTile = () => this.props.Products.map((t) => (
      <ProductTile data={t}
      key={t.id}
      deleteProdById={this.props.deleteProdById}
      getProd={this.props.getProd}
      clicked={() => this.productTileSelectedHandler(t.id)}
      />
  ));

  componentDidMount() {
  }

  productTileSelectedHandler = (id) => {
    this.props.history.push({ pathname: `ProductDetail/${id}` });
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <section className="landingPage-container">
          {this.buildProductTile()}
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Products;
