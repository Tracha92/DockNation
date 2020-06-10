module.exports = {
    factory: (data) => {
        let networksGateway = [];

        for (let gateways of data.gateways) {
            networksGateway.push(new NetworkGateway(gateways.gateway, gateways.subnet));
        }
        return new CreateNetworkModel(data.name, networksGateway);
    }
}

class CreateNetworkModel {
    constructor(name, networksGateway) {
        this.name = name;
        this.networksGateway = networksGateway;
    }
}

class NetworkGateway {
    constructor(gateway, subnet) {
        this.gateway = gateway;
        this.subnet = subnet;
    }
}