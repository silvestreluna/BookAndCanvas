import React from 'react';
import getAllProducts from '../../helpers/data/productRequests';
import ProductTile from '../ProductTile/ProductTile';
import AddProduct from '../AddProduct/AddProduct';

import './LandingPage.scss';

class LandingPage extends React.Component{
    state = {
        Products: []
    }
    getProducts = () => {
        getAllProducts().then(data => {
            this.setState({Products:data})
        })
    }
    componentDidMount() {
       this.getProducts();
    }
    
    buildProductTile = () => this.state.Products.map(t => (<ProductTile data={t} key={t.id}></ProductTile>));
    
    
    render(){
        console.log(this.state.Products);
        return(
            <span className="main-wrapper">
                <header>
                    <AddProduct getProd={this.getProducts} />
                </header>
                <section className="landingPage-container">
                {this.buildProductTile()}  
                </section>
            </span>
        )
    }
}

export default LandingPage;