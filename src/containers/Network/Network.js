import React from "react";
import './Network.css';

export default class Network extends React.Component {
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
        const response = await fetch('/networks');
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
                    <div key={item.name} className={"NetworkMenuItem"}>
                        <span className={"NetworkMenuItemName"}>{item.name}</span>
                        <span className={"NetworkMenuItemSubnet"}>{item.subnet}</span>
                    </div>
                ))}
            </div>
            <div className={'NetworkCreate'}>Add new network</div>
        </div>
    );
}
