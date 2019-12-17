import React from 'react';
import getProductDetails from '../../helpers/data/getProductDetails';

import './ProductDetail.scss';

class ProductDetail extends React.Component {
    state = {
      ProductDetails: [],
    }

    getProdDetail = (id) => {
      getProductDetails.getDetails(id).then((data) => {
        this.setState({ ProductDetails: data });
      });
    };

    componentDidMount() {
      this.getProdDetail(this.props.match.params.id);
    }

    render() {
      return (
          <main className="wrapper">
            <article className="left">
              <div className="slideshow" style={{ backgroundImage: 'url("' + this.state.ProductDetails.imgUrl + '")' }}>
                {/* <carosel details={this.state.ProductDetails}></carosel> */}
              </div>
            </article>
            <article className="right">
              <div className="productInfo-wrapper">
                <span className="productTitle">{this.state.ProductDetails.productName}</span>
                <span className="productPrice">{this.state.ProductDetails.price}</span>
              </div>
              <div>
               <span>{this.state.serviceType}</span>
              </div>
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
