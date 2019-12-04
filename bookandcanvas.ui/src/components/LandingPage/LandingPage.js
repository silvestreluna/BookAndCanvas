import React from 'react';
import ProductTile from '../ProductTile/ProductTile';

import './LandingPage.scss';

class LandingPage extends React.Component{
    
    buildProductTile = () => this.props.Products.map(t => (<ProductTile data={t} key={t.id}></ProductTile>));
    
    
    render(){
        return(
            <span className="main-wrapper">
                <section className="landingPage-container">
                {this.buildProductTile()}  
                </section>
            </span>
        )
    }
}

export default LandingPage;