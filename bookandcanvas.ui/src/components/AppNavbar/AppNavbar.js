import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from 'firebase';

import './AppNavbar.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import email from '../../assets/images/email-icon.svg';
import shoppingCart from '../../assets/images/cart-icon.svg';
// import computer from '../../assets/images/edit-icon.svg';
// import authService from '../../helpers/auth.service';

class AppNavbar extends React.Component {
  componentDidMount() {
    // this.setState({ authenticated: authService.CheckAuth() });
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
    // this.props.location.pathname = '/home';
    this.props.history.push('/home');
    // window.history.push('/home');
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
                <ExitToAppIcon alt="cart icon" title="Shopping Cart" className="nav-icon" onClick={this.logMeOut} />
                <Link to="/ProfilePage">
                  <AccountCircleIcon alt="user icon" title="user icon" lassName="nav-icon" />
                </Link>
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

export default withRouter(AppNavbar);
