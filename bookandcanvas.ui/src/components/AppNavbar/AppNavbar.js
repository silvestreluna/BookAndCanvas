import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

import './AppNavbar.scss';
import email from '../../assets/images/email-icon.svg';
import shoppingCart from '../../assets/images/cart-icon.svg';
import computer from '../../assets/images/edit-icon.svg';
// import authService from '../../helpers/auth.service';

class AppNavbar extends React.Component {

  componentDidMount() {
    // this.setState({ authenticated: authService.CheckAuth() });
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
    this.props.history.push('/home');
  };

  render() {
    const authed = this.props.authenticated;
    return (
      <React.Fragment>
          <nav>
              <p className="logoType">Books &amp; Canvas</p>
              {(authed === true)
                ? (<div>
                <img src={email} alt="email icon" title="Email" className="nav-icon" />
                <img src={shoppingCart} alt="cart icon" title="Shopping Cart" className="nav-icon" />
                <img src={computer} alt="cart icon" title="Shopping Cart" className="nav-icon" onClick={this.logMeOut} />
              </div>)
                : (<div>
                      <Link to="/login">Login</Link>
                  </div>
                )}
          </nav>
      </React.Fragment>
    );
  }
}

export default AppNavbar;
