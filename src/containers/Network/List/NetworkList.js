import React from 'react'

export default class NetworkList extends React.Component {
    render() {
        return <div className={'NetworkList'}>
            {this.props.networks.map(item => (
                <div key={item.name} className={"NetworkMenuItem"}>
                    <span className={"NetworkMenuItemName"}>{item.name}</span>
                    <span className={"NetworkMenuItemSubnet"}>{item.subnet}</span>
                    <span className={"NetworkMenuItemSubnet"}>{item.gateway}</span>
                </div>
            ))}
        </div>
    }
}