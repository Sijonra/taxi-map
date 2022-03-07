import React from "react";

class Profile extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <h1 onClick={this.props.setPage}>Profile</h1>
        )
    }
}

export default Profile;