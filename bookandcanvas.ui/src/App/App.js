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
        <Route path='/' component = {Layout} exact />
        <Route path='/addUser' component = {NewUser} exact />
        <Route path='/editUser' component = {EditUser} exact />
      </Switch>
    </BrowserRouter>
  <Layout />
  </div>
  );
}
export default App;
