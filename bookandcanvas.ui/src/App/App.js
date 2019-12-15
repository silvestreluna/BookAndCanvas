import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import LandingPage from '../components/LandingPage/LandingPage';
import Layout from '../components/Layout/Layout';
import './App.scss';
// import NewUser from '../components/Profile/NewUser';
// import ProductDetail from '../components/ProductDetail/ProductDetail';


function App() {
  return (
    <BrowserRouter>
        <Layout />
        {/* <ProductDetail className="ProductDetailComponent"/> */}

    </BrowserRouter>
  );
}

export default App;
