import React from 'react';
import getProductDetails from '../../helpers/data/getProductDetails';

import './ProductDetail.scss';

class ProductDetail extends React.Component {
    state = {
      ProductDetails: [],
    }

    getProdDetail = () => {
      getProductDetails.getDetails(1004).then((data) => {
        this.setState({ ProductDetails: data });
      });
    };

    componentDidMount() {
      this.getProdDetail();
    }

    render() {
      console.log(this.state.ProductDetails);
      return (
          <main className="wrapper">
            <article className="left">
              {/* <carosel details={this.state.ProductDetails}></carosel> */}
              <img src={this.state.ProductDetails.imgUrl} alt="Product" className="slideshow"/>
            </article>
            <article className="right">
              <header>
                <span className="productTitle">{this.state.ProductDetails.productName}</span>
                <span className="productPrice">{this.state.ProductDetails.price}</span>
              </header>
              <section>
                {this.state.ProductDetails.description}
              </section>
            <section>

            </section>
            </article>
          </main>

      );
    }
}
export default ProductDetail;
