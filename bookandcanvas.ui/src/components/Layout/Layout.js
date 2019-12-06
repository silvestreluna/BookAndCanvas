import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import getAllProducts from '../../helpers/data/productRequests'
import LandingPage from '../LandingPage/LandingPage';
import AppNavbar from '../AppNavbar/AppNavbar';


import './Layout.scss'

class Layout extends React.Component{
    state={
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

    render(){
        return(
            <React.Fragment>
                <header>
                    <AppNavbar></AppNavbar>
                    <div className="secondarymenu">
                        <AddProduct getProd={this.getProducts} />
                    </div>
                </header>
                <section>
                    <aside>
                            <p>aside information</p>
                    </aside>
                    <main>
                        <LandingPage Products={this.state.Products}></LandingPage>
                    </main>
                </section>
            </React.Fragment>
        );
    }
}

export default Layout;