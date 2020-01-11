import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import Layout from '../components/Layout/Layout';
import './App.scss';
import NewUser from '../components/Profile/NewUser';
import EditUser from '../components/Profile/EditUser';
import AppNavbar from '../components/AppNavbar/AppNavbar';
import Auth from '../components/Auth/Auth';
import fbConnection from '../helpers/data/connection';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
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
      <div>
        <BrowserRouter>
        <AppNavbar authed={authed} />
          <Switch>
            <PublicRoute path='/auth' component={Auth} authed={authed} />
            <PrivateRoute exact path="/" component={Layout} authed={authed}/>

            <Redirect from="*" to="/auth" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

