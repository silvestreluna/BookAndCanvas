import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect,
} from 'react-router-dom';
import firebase from 'firebase/app';
import Auth from '../Auth/Auth';

import AddProduct from '../AddProduct/AddProduct';
import productRequest from '../../helpers/data/productRequests';
import Products from '../Products/Products';
import ProductDetail from '../ProductDetail/ProductDetail';
import AppNavbar from '../AppNavbar/AppNavbar';
import fbConnection from '../../helpers/data/connection';


import ProfileAside from '../Profile/ProfileAside';
import './Layout.scss';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => <Component {...props} {...rest} />;
  return <Route render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route render={(props) => routeChecker(props)} />;
};


class Layout extends React.Component {
  state = {
    Products: [],
    authed: false,
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
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <React.Fragment>
        <header>
          <div className="secondarymenu">
            <AddProduct getProd={this.getProducts} />
          </div>
        </header>
        <section>
          <BrowserRouter>
            <AppNavbar authed={authed} />
            <Switch>
              <PublicRoute exact path='/auth' component={Auth} authed={authed} />
              {/* <PublicRoute exact path="/" component={Products} authed={authed} /> */}
              <PrivateRoute path="/ProfilePage" exact render={(props) => (
                <React.Fragment>
                  <ProfileAside />
                  <Products Products={this.state.Products}
                    deleteProdById={this.deleteProdById}
                    getProd={this.getProducts}
                    {...props} />
                </React.Fragment>)}
              />

              <PublicRoute path="/" exact render={(props) => (
                <Products Products={this.state.Products}
                  deleteProdById={this.deleteProdById}
                  getProd={this.getProducts}
                  {...props} authed={authed} />
              )}
              />
              <Route path="/Home" exact render={(props) => (
                <Products Products={this.state.Products}
                  deleteProdById={this.deleteProdById}
                  getProd={this.getProducts}
                  {...props} />
              )}
              />
              <Route path="/product/:id" component={ProductDetail} />

            </Switch>
          </BrowserRouter>
        </section>
      </React.Fragment>
    );
  }
}

export default Layout;
