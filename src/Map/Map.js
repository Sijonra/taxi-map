import Header from "../Header/Header";
import React from "react";

class Map extends React.Component{
    render() {
        return (
            <>
                <Header setPage={this.props.setPage}/>
                <h1>Map</h1>
            </>
        );
    }
}

export default Map;