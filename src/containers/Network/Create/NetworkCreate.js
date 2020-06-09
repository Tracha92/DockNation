import React from 'react';

export default class NetworkCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            gateway: '',
            subnet: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            Name: <input name="name" value={this.state.name} onChange={this.handleChange} />
            Gateway (optional): <input name="gateway" value={this.state.gateway} onChange={this.handleChange} />
            Subnet (optional): <input name="subnet" value={this.state.subnet} onChange={this.handleChange} />
            <input type="submit" value="Submit"/>
        </form>
    }
}