import React from "react";
import Menu from "../Menu/Menu";
import Network from "../Network/Network";
import Image from "../Image/Image"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './Main.css';

export default class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Router>
                    <Menu />
                    <Switch>
                        <Route exact path="/" />
                        <Route path="/containers" />
                        <Route path="/images" component={Image}/>
                        <Route path="/networks" component={Network} />
                        <Route path="/dockerhub" />
                        <Route path="/settings" />
                    </Switch>
                </Router>
            </div>
        )
    }
}
