import React from 'react';
// import LandingPage from '../components/LandingPage/LandingPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import './App.scss';
import NewUser from '../components/Profile/NewUser';
import EditUser from '../components/Profile/EditUser';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Layout}/>
          <Route path="/addUser" component={NewUser}/>
          <Route path="/editUser" component={EditUser}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


