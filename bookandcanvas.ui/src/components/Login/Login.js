import React from 'react';
import { Link } from 'react-router-dom';

import authRequests from '../../helpers/Auth';

import './Login.scss';

class Login extends React.Component {
  state = {
    user: {
      email: '',
      password: '',
    },
    Authenticated: this.props.Authenticated,
  };

  componentDidMount(state) {
    console.log(`Athenticated: ${this.state.Authenticated}`);
  }

  loginClickEvent = (e) => {
    const { user } = this.state;
    e.preventDefault();
    authRequests.loginUser().then(() => {
      this.setState({ Authenticated: true });
      this.props.setAuthenticationState(true);
      console.log(`Authenticated: ${this.state.Authenticated}`);
      this.props.history.push('/home');
    })
      .catch((error) => {
        console.error('there was an error in registering', error);
      });
  };

  emailChange = (e) => {
    const tempUser = { ...this.state.user };
    tempUser.email = e.target.value;
    this.setState({ user: tempUser });
  };

  passwordChange = (e) => {
    const tempUser = { ...this.state.user };
    tempUser.password = e.target.value;
    this.setState({ user: tempUser });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="Login">
        <div id="login-form">
          {/* <h1 className="text-center">Login</h1> */}
          <form className="form-horizontal col-sm-12">
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-12 control-label">
                Email:
              </label>
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  value={user.email}
                  onChange={this.emailChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-sm-12 control-label">
                Password:
              </label>
              <div className="col-sm-12">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  value={user.password}
                  onChange={this.passwordChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <Link to="/register">Need to Register?</Link>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <button
                  type="submit"
                  className="btn btn-default col-xs-12 loginBtn"
                  onClick={this.loginClickEvent}
                >
                  Login
                </button>
                <button onClick={this.loginClickEvent} className="btn btn-primary col-xs-12 googleBtn">Login with Google</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
