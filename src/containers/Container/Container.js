import React from "react";
import {NavLink} from "react-router-dom";

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ isLoaded: true, items: res }))
            .catch(err => this.setState({ isLoaded: true, error: err }));
    }

    callApi = async () => {
        const response = await fetch('/containers');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        const { error, isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return renderLoaded(items)
    }
}

const renderLoaded = (items) => {
    return (
        <div className={'NetworkMenu'}>
            <div className={'NetworkList'}>
                {items.map(item => (
                    <NavLink exact to={`/containers/${item.ID}`}>
                        <div key={item.ID} className={"NetworkMenuItem"}>
                            <span className={"NetworkMenuItemName"}>{item.Names}</span>
                            <span className={"NetworkMenuItemName"}>{item.ID}</span>
                            <span className={"NetworkMenuItemSubnet"}>{item.RunningFor}</span>
                            <span className={"NetworkMenuItemSubnet"}>{item.Status}</span>
                        </div>
                    </NavLink>
                ))}
            </div>
            <div className={'NetworkCreate'}>Add new network</div>
        </div>
    );
}

                    /*<div key={item.ID} className={"NetworkMenuItem"}>
                    <span className={"NetworkMenuItemName"}>{item.Names}</span>
                    <span className={"NetworkMenuItemName"}>{item.ID}</span>
                    <span className={"NetworkMenuItemSubnet"}>{item.RunningFor}</span>
                    <span className={"NetworkMenuItemSubnet"}>{item.Status}</span>
                    </div>
                    </Route>*/
