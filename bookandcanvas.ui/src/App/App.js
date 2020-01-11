import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import FbConnections from '../helpers/connections';

import './App.scss';


function App() {
  FbConnections();

  return (
    <BrowserRouter>
      <Switch>
        <Layout />;
      </Switch>
    </BrowserRouter>
  );
}

export default App;
