import React, {useState} from "react";
import './App.css';
import LogForm from "./LogForm/LogForm";
import Map from "./Map/Map";
import Header from "./Header/Header";
import Register from './Register/Register'
import Profile from "./Profile/Profile";

const PAGES = {
    login: LogForm,
    register: Register,
    map: Map,
    profile: Profile,
    header: Header,
}


class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            page: "login",
        }
    }

    setPage(page){
        this.setState({
            page: page,
        })
    }

    alert(){
        console.log('jopa');
    }

    render() {
        const page = this.state.page;
        const Page = PAGES[page];
        return(
            <div>
                <header>
                    <Header />
                    <nav className="header-nav">
                        <ul>
                            <li onClick={ () => this.setPage('login') } >Login</li>
                            <li onClick={ () => this.setPage('register') } >Register</li>
                            <li onClick={ () => this.setPage('map') } >Map</li>
                            <li onClick={ () => this.setPage('profile') } >Profile</li>
                        </ul>
                    </nav>
                </header>
                <section>
                    {<Page setPage={() => this.setPage('')} />}
                </section>

            </div>
        )
    }

}

export default App;
