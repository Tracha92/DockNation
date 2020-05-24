import React from "react";

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

        return render(items)
    }
}

function render(items) {
    return (
        <div>
            {items.map(item => (
                <div key={item.name}>
                    {item.name} {item.gateway} {item.subnet}
                </div>
            ))}
        </div>
    );
}
