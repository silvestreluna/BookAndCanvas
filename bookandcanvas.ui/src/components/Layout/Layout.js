import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

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
           <BrowserRouter>
           <Switch>
              {/* <ProductDetail Products={this.state.products} className="ProductDetailComponent"/> */}
              <Route path="/ProfilePage" exact render={(props) => <React.Fragment>
                  <ProfileAside />
                  <Products Products={this.state.Products}
                      deleteProdById={this.deleteProdById}
                      getProd={this.getProducts}
                      {...props} />
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
              <Route path="/product/:id" component={ProductDetail}/>

            </Switch>
          </BrowserRouter>
        </section>
      </React.Fragment>
    );
  }
}

export default Layout;
