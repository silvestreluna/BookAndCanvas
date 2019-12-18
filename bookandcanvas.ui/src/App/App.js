import React from 'react';
import Layout from '../components/Layout/Layout';
// import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
// import firebase from 'firebase/app';
// import Layout from '../components/Layout/Layout';
// import './App.scss';
// import AppNavbar from '../components/AppNavbar/AppNavbar';
// import Auth from '../components/Auth/Auth';
// import fbConnection from '../helpers/data/connection';
// import ProfileAside from '../components/Profile/ProfileAside';
// import Products from '../components/Products/Products';

// fbConnection();

// const PublicRoute = ({ component: Component, authed, ...rest }) => {
//   const routeChecker = (props) => <Component {...props} {...rest} />;
//   return <Route render={(props) => routeChecker(props)} />;
// };

// const PrivateRoute = ({ component: Component, authed, ...rest }) => {
//   const routeChecker = (props) => (authed === true
//     ? (<Component {...props} {...rest}/>)
//     : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
//   return <Route render={(props) => routeChecker(props)} />;
// };

class App extends React.Component {
  // state = {
  //   authed: false,
  // }

  // componentDidMount() {
  //   this.removeListener = firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({ authed: true });
  //     } else {
  //       this.setState({ authed: false });
  //     }
  //   });
  // }

  // componentWillUnmount() {
  //   this.removeListener();
  // }

  render() {
    // const { authed } = this.state;
    return (
      // <div>
      //   <BrowserRouter>
      //   <AppNavbar authed={authed} />
      //     <Switch>
      //       <PublicRoute exact path='/auth' component={Auth} authed={authed}/>
      //       <PublicRoute exact path="/" component={Layout} authed={authed}/>
      //       <PrivateRoute exact path="/ProfilePage" authed={authed} render={(props) => (
      //         <React.Fragment>
      //             <ProfileAside />
      //             <Products Products={this.state.Products}
      //                 deleteProdById={this.deleteProdById}
      //                 getProd={this.getProducts}
      //                 {...props} authed={authed} />
      //         </React.Fragment>
      //       )} />
      //       {/* <Redirect from="*" to="/auth" /> */}
      //     </Switch>
      //   </BrowserRouter>
      // </div>
      <Layout />
    );
  }
}
export default App;
