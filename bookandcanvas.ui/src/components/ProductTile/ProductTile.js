import React from 'react';
import deleteBtn from '../../assets/images/delete-icon.svg';

import './ProductTile.scss';

class ProductTile extends React.Component {
    deleteProduct = () => {
      const prodId = this.props.data.id;
      this.props.deleteProdById(prodId);
    }

    render() {
      const productTileStyle = {
        backgroundImage: `url(${this.props.data.imgUrl})`,
        backgroundRepeat: 'no-Repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      };
      return (
            <React.Fragment>
                <div style={productTileStyle} className="productTile">
                    <div className="btn-wrapper">
                        <img src={deleteBtn} alt="delete-icon" className="delete-btn" onClick={this.deleteProduct}/>
                    </div>
                    <div className="info-wrapper">
                        <div className="wrapper">
                            <h4>{this.props.data.productName}</h4>
                            <h4 className="price">{this.props.data.price}</h4>
                        </div>
                        <div className="wrapper">
                            <h6>{this.props.data.description}</h6>
                        </div>
                    </div>
                </div>
            </React.Fragment>
      );
    }
}
export default ProductTile;
