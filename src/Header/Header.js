import React from "react";

class Header extends React.Component{

    render() {

        return(
            <header>
                <nav className="header-nav">
                    <ul>
                        <li onClick={ () => this.props.setPage('login') }>Login</li>
                        <li onClick={ () => this.props.setPage('register') }>Register</li>
                        <li onClick={ () => this.props.setPage('map') }>Map</li>
                        <li onClick={ () => this.props.setPage('profile') }>Profile</li>
                    </ul>
                </nav>
            </header>
        )

    }

}

export default Header;