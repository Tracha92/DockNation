import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as FaSolidIcon from '@fortawesome/free-solid-svg-icons'
import * as FaBrandIcon from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

 export default class Menu extends React.Component {
    render() {
        return <div className="Menu">
            <ImagesMenuItem />
            <ContainersMenuItem />
            <NetworksMenuItem />
            <DockerHubMenuItem />
            <SettingsMenuItem />
        </div>
    }
}

const ImagesMenuItem = () => {
    return <NavLink exact to="/images">
        <div className="MenuItem">
            <FontAwesomeIcon icon={FaSolidIcon.faClone}/><span>Images</span>
        </div>
    </NavLink>
};

const ContainersMenuItem = () => {
    return <NavLink to="/containers">
        <div className="MenuItem">
            <FontAwesomeIcon icon={FaSolidIcon.faBoxOpen}/><span>Containers</span>
        </div>
    </NavLink>
};

const NetworksMenuItem = () => {
    return <NavLink to={'/networks'}>
        <div className="MenuItem">
            <FontAwesomeIcon icon={FaSolidIcon.faNetworkWired}/><span>Networks</span>
        </div>
    </NavLink>
};

const DockerHubMenuItem = () => {
    return <NavLink to="/dockerhub">
        <div className="MenuItem">
            <FontAwesomeIcon icon={FaBrandIcon.faDocker}/><span>DockerHub</span>
        </div>
    </NavLink>
};

const SettingsMenuItem = () => {
    return <NavLink to="/settings">
        <div className="MenuItem">
            <FontAwesomeIcon icon={FaSolidIcon.faCogs}/><span>Settings</span>
        </div>
    </NavLink>
};