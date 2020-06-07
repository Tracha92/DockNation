module.exports = {
    CreateNetworkModel: (name, networksGateway) => {
        this.name = name;
        this.networksGateway = networksGateway;
    },

    NetworkGateway: (gateway, subnet) => {
        this.gateway = gateway;
        this.subnet = subnet;
    }
}
