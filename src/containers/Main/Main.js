import React from "react";
import Menu from "../Menu/Menu";
import Network from "../Network/Network";
import Image from "../Image/Image"
import Container from "../Container/Container"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './Main.css';
import ContainerDetails from "../ContainerDetails/ContainerDetails";

export default class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Router>
                    <Menu />
                    <Switch>
                        <Route exact path="/" />
                        <Route path="/containers" component={Container}/>
                        <Route path="/images" component={Image}/>
                        <Route path="/networks" component={Network} />
                        <Route path="/dockerhub" />
                        <Route path="/settings" />
                    </Switch>
                    <Switch>
                        <Route path="/containers/:id" component={ContainerDetails}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
