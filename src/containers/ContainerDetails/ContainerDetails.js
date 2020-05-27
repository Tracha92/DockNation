import React from "react";

export default class ContainerDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: {}
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        this.callApi(params.id)
            .then(res => this.setState({ isLoaded: true, item: res }))
            .catch(err => this.setState({ isLoaded: true, error: err }));
    }

    callApi = async (containerId) => {
        const response = await fetch(`/containers/${containerId}`);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        const { error, isLoaded, item } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return renderLoaded(item)
    }
}

const renderLoaded = (item) => {
    return (
        <div className={'NetworkMenu'}>
            <div className={'NetworkList'}>
                <div key={item.ID} className={"NetworkMenuItem"}>
                    <span className={"NetworkMenuItemName"}>{item.Name}</span>
                    <span className={"NetworkMenuItemName"}>{item.ID}</span>
                    <span className={"NetworkMenuItemSubnet"}>{item.BlockIO}</span>
                    <span className={"NetworkMenuItemSubnet"}>{item.MemUsage}</span>
                </div>
            </div>
        </div>
    );
}
