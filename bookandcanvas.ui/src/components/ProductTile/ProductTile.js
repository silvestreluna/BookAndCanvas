import React from 'react';
import EditProductForm from '../EditProductForm/EditProductForm';
import deleteIcon from '../../assets/images/delete-icon.svg';

import './ProductTile.scss';

class ProductTile extends React.Component {
  state = {
    isEditing: false,
  }

  deleteProduct = () => {
    const prodId = this.props.data.id;
    this.props.deleteProdById(prodId);
  }

  productTileSelectedHandler = () => {
    this.props.historyProp.push({ pathname: `product/${this.props.data.id}` });
  }

  render() {
    const productTileStyle = {
      backgroundImage: `url(${this.props.data.imgUrl})`,
      backgroundRepeat: 'no-Repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    };

    const EditButton = () => (
      <EditProductForm newProdObj={this.props.data} getProd={this.props.getProd} />
    );

    return (
        <React.Fragment>
          <div style={productTileStyle} className="productTile" onClick={this.productTileSelectedHandler}>
            <div className="btn-wrapper">
              <div>
                {EditButton()}
              </div>
              <div>
                <img src={deleteIcon} alt="delete-icon" className="delete-btn" onClick={this.deleteProduct} />
              </div>

            </div>
            <div className="info-wrapper">
              <div className="wrapper">
                <h4>{this.props.data.productName}</h4>
                <h4 className="price">{`$${this.props.data.price.toFixed(2)}`}</h4>
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
