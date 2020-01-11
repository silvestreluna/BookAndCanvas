import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';

import AddProduct from '../AddProduct/AddProduct';
import productRequest from '../../helpers/data/productRequests';
import Products from '../Products/Products';
import ProductDetail from '../ProductDetail/ProductDetail';
import AppNavbar from '../AppNavbar/AppNavbar';
import Login from '../Login/Login';

import ProfileAside from '../Profile/ProfileAside';
import './Layout.scss';

class Layout extends React.Component {
  state = {
    Products: [],
    authenticated: false,
  }

  setAuthenticationState = (authenticated) => {
    this.setState({ authenticated });
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

  // componentDidMount() {
  //   this.getProducts();
  // }

  componentDidMount() {
    this.getProducts();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authenticated: true });
      } else {
        this.setState({ authenticated: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <AppNavbar authenticated={this.state.authenticated} {...this.props}></AppNavbar>
          {(this.state.authenticated === true)
            ? <div className="secondarymenu">
                <AddProduct getProd={this.getProducts} />
              </div>
            : null
            }
        </header>
        <section>
              <Route path="/ProfilePage" exact render={(props) => (
              <React.Fragment>
                  <ProfileAside />
                  <Products Products={this.state.Products}
                      deleteProdById={this.deleteProdById}
                      getProd={this.getProducts}
                      {...props} />
              </React.Fragment>)}
              />

              <Route path="/" exact render={(props) => (
              <Products Products={this.state.Products}
                    deleteProdById={this.deleteProdById}
                    getProd={this.getProducts}
                    {...props} />
              )}
              />
               <Route path="/login" exact render={(props) => (
                  <Login {...props} setAuthenticationState={this.setAuthenticationState} />
               )} />

              <Route path='/home' component={(props) => (
              <Products Products={this.state.Products}
                    deleteProdById={this.deleteProdById}
                    getProd={this.getProducts}
                    {...props} />
              )} authenticated={this.state.authenticated}/>

              <Route path="/product/:id" component={ProductDetail}/>
        </section>
      </React.Fragment>
    );
  }
}

export default Layout;
