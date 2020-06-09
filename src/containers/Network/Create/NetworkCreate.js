import React from 'react';

export default class NetworkCreate extends React.Component {
    render() {
        return <form>
            Name: <input/>
            Gateway (optional): <input/>
            Subnet (optional): <input/>
        </form>
    }
}