import React from 'react';
import firebase from 'firebase/app';
import { Link, withRouter } from 'react-router-dom';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-secondary" onClick={this.loginClickEvent}>Login with Google</button>
        <Link to='/addUser' className="btn btn-primary">Sign Up!</Link>
      </div>
    );
  }
}

export default withRouter(Auth);
