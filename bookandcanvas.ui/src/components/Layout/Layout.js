import React from 'react';

import './Layout.scss'
import LandingPage from '../LandingPage/LandingPage';

class Layout extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header>
                    <nav>This is the navbar</nav>
                    <div>user info and other things</div>
                </header>
                <section>
                    <aside>
                            <p>aside information</p>
                    </aside>
                    <main>
                        
                        <LandingPage></LandingPage>
                    </main>
                </section>
            </React.Fragment>
        );
    }
}

export default Layout;