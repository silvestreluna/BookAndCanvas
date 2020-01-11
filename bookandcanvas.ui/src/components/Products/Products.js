import React from 'react';
import ProductTile from '../ProductTile/ProductTile';

import './Products.scss';

class Products extends React.Component {
  buildProductTile = () => this.props.Products.map((t) => {
    const history = { ...this.props.history };

    return (<ProductTile data={t}
      key={t.id}
      deleteProdById={this.props.deleteProdById}
      getProd={this.props.getProd}
      historyProp={history}
      />);
  });

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
