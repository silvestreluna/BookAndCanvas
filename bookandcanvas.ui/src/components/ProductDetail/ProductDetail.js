import React from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import getProductDetails from '../../helpers/data/getProductDetails';


import './ProductDetail.scss';

class ProductDetail extends React.Component {
    state = {
      ProductDetails: [],
      dropdownOpen: false,
      // setOpen: false,
    }

    toggle = () => this.setState({ setOpen: !this.state.dropdownOpen });


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
                <span className="productPrice">{`$${this.state.ProductDetails.price}`}</span>
              </div>
              <div>
               <span>{this.state.serviceType}</span>
              </div>
              <div>
                {this.state.ProductDetails.description}
              </div>
              <div>
                <div className="labelInput-wrapper">
                  <label>Qty</label>
                  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                      Button Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </div>
                <div className="labelInput-wrapper">
                  <label>Shipping</label>
                  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                      Button Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </div>
                <button>Add to cart</button>
              </div>
            </article>
          </main>
      );
    }
}
export default ProductDetail;
