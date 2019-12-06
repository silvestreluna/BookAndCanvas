import React from 'react';

import './AppNavbar.scss';

class AppNavbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <nav>
                    <p className="logoType">Books &amp; Canvas</p>
                </nav>
            </React.Fragment>
        )
    }
}

export default AppNavbar;