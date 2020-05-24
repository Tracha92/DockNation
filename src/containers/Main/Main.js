import React from "react";
import Menu from "../Menu/Menu";
import Network from "../Network/Network";

import './Main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuSelected: "Network"
        };
    }

    render() {
        switch (this.state.menuSelected) {
            case "Network":
                return renderNetwork()
        }

        return (
            <div className="Main">
                <Menu />
            </div>
        )
    }
}

function renderNetwork() {
    return (
        <div className="Main">
            <Menu />
            <Network />
        </div>
    )
}