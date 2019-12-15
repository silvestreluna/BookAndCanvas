import React from 'react';
import { Route } from 'react-router-dom';

import AddProduct from '../AddProduct/AddProduct';
import productRequest from '../../helpers/data/productRequests';
import Products from '../Products/Products';
import ProductDetail from '../ProductDetail/ProductDetail';
import AppNavbar from '../AppNavbar/AppNavbar';

import ProfileAside from '../Profile/ProfileAside';
import './Layout.scss';


class Layout extends React.Component {
  state = {
    Products: [],
  }

  getProducts = () => {
    productRequest.getAllProducts().then((data) => {
      this.setState({ Products: data });
    });
  }

  deleteProdById = (prodId) => {
    productRequest.deleteProd(prodId)
      .then(() => {
        this.getProducts();
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    // const landingPageStyle = {
    //   minWidth: '100%',
    // };

    console.log(this.state.Products);
    return (
      <React.Fragment>
        <header>
          <AppNavbar></AppNavbar>
          <div className="secondarymenu">
            <AddProduct getProd={this.getProducts} />
          </div>
        </header>
        <section>
        <Route path="/ProfilePage" exact render={() => <React.Fragment>
            <ProfileAside />
            <Products Products={this.state.Products}
                deleteProdById={this.deleteProdById}
                getProd={this.getProducts}/>
          </React.Fragment>}
        />
        <Route path="/" exact render={() => <Products Products={this.state.Products}
              deleteProdById={this.deleteProdById}
              getProd={this.getProducts}/>}
        />
        <Route path="/Home" exact render={() => <Products Products={this.state.Products}
              deleteProdById={this.deleteProdById}
              getProd={this.getProducts}/>}
        />
        <Route path="Products/:id" exact render={() => <ProductDetail Products={this.state.Products}
              deleteProdById={this.deleteProdById}
              getProd={this.getProducts}/>}
        />
        </section>
      </React.Fragment>
    );
  }
}

export default Layout;
