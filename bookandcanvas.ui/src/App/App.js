import React from 'react';
<<<<<<< HEAD
// import LandingPage from '../components/LandingPage/LandingPage';
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
            <PublicRoute path="/addUser" component={NewUser} authed={authed}/>
            <PrivateRoute path="/editUser" component={EditUser} authed={authed}/>
            <Redirect from="*" to="/auth" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
=======
 // import LandingPage from '../components/LandingPage/LandingPage';
 import Layout from '../components/Layout/Layout';
 import './App.scss';
import NewUser from '../components/Profile/NewUser'

 
 function App() {
   return (
    // <NewUser />
    <Layout />
   );
 }

 export default App;
 
>>>>>>> master
