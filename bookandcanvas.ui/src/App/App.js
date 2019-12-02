import React from 'react';
import LandingPage from '../components/LandingPage/LandingPage';
import AddProduct from '../components/AddProduct/AddProduct'
import './App.scss';

function App() {
  return (
    <div className="App">

      <h2>Book & Canvas</h2>
      <header>
        <AddProduct />
      </header>
      <LandingPage />
    </div>
  );
}

export default App;
