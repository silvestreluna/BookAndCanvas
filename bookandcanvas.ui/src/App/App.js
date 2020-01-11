import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import fbConnections from '../helpers/connections';

import './App.scss';

fbConnections();

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout />;
      </Switch>
    </BrowserRouter>
  );
}

export default App;
