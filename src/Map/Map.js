import Header from "../Header/Header";
import React from "react";
import './Map.css'

class Map extends React.Component{
    render() {
        return (
            <section className="section-map">
                <Header setPage={this.props.setPage}/>
                <h1>Map</h1>
            </section>
        );
    }
}

export default Map;