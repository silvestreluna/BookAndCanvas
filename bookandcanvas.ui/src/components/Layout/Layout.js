import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import productRequest from '../../helpers/data/productRequests';
import LandingPage from '../LandingPage/LandingPage';
import ProfileAside from '../Profile/ProfileAside';
import './Layout.scss';


class Layout extends React.Component {
<<<<<<< HEAD
    state= {
        Products: []
=======
    state={
      Products: [],
>>>>>>> master
    }

    getProducts = () => {
      productRequest.getAllProducts().then((data) => {
        this.setState({ Products: data });
      });
    }

    deleteProdById = (prodId) => {
      productRequest.deleteProd(prodId)
        .then(() => {
          this.getProducts();
        })
        .catch((error) => console.error(error));
    }

    componentDidMount() {
      this.getProducts();
    }

    render() {
<<<<<<< HEAD
        return (
=======
      return (
>>>>>>> master
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
                        <LandingPage
                        Products={this.state.Products}
                        deleteProdById={this.deleteProdById}
                        getProd={this.getProducts}
                        ></LandingPage>
                    </main>
                </section>
            </React.Fragment>
      );
    }
}

export default Layout;
