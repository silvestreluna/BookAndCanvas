import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import getAllProducts from '../../helpers/data/productRequests'
import LandingPage from '../LandingPage/LandingPage';
import AppNavbar from '../AppNavbar/AppNavbar';
import Auth from '../Auth/Auth';

import ProfileAside from '../Profile/ProfileAside';
import './Layout.scss'


class Layout extends React.Component {
    state= {
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

    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="secondarymenu">
                        <AddProduct getProd={this.getProducts} />
                    </div>
                </header>
                <section>
                    <aside>
                        <ProfileAside />
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