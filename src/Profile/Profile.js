import React from "react";
import Header from '../Header/Header';

class Profile extends React.Component{

    render() {
        return(
            <section className="section-profile">
                <Header setPage={this.props.setPage}/>
                <h1>Profile</h1>
            </section>
        )
    }
}

export default Profile;