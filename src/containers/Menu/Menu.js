import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { faDocker } from "@fortawesome/free-brands-svg-icons";

export default class Menu extends React.Component {
    render() {
        return <div className="Menu">
            <div className="MenuItem"><FontAwesomeIcon icon={faCoffee}/>Images</div>
            <div className="MenuItem">Containers</div>
            <div className="MenuItem ActiveItem"><FontAwesomeIcon icon={faNetworkWired}/>Networks</div>
            <div className="MenuItem"><FontAwesomeIcon icon={faDocker}/>DockerHub</div>
            <div className="MenuItem">Settings</div>
        </div>
    }
}