let {execShellCommand} = require("./../../Common/Gateway/CommonGateway");
let {extract} = require("./../Extractor/CreateNetworkExtractor");
let {factory} = require("./../Factory/CreateNetworkModelFactory");

module.exports = {
    list: async function() {
        return await getNetworkList();
    },
    details: async function(networkName) {
        return await getNetworkDetails(networkName);
    },
    create: async function(data) {
        return await createNetwork(factory(data));
    }
}

async function getNetworkList() {
    let networkList = [];
    const res = await execShellCommand('docker network ls --format {{.Name}}');
    const networkListOutput = res.split('\n');

    for (let line = 0; line < networkListOutput.length - 1; line++) {
        networkList.push(networkListOutput[line]);
    }

    return networkList;
}

async function getNetworkDetails(networkName) {
    let networkDetailsOutput;
    const res = await execShellCommand("docker network inspect " + networkName);
    networkDetailsOutput = JSON.parse(res).pop();

    let ipamConfig = networkDetailsOutput.IPAM.Config.pop();
    if (typeof ipamConfig === 'undefined') {
        ipamConfig = {
            Subnet: "",
            Config: ""
        }
    }

    return {
        id: networkDetailsOutput.Id,
        name: networkDetailsOutput.Name,
        scope: networkDetailsOutput.Scope,
        driver: networkDetailsOutput.Driver,
        isIPv6: networkDetailsOutput.EnableIPv6,
        subnet: ipamConfig.Subnet,
        gateway: ipamConfig.Gateway,
        containers: networkDetailsOutput.Containers
    }
}

async function createNetwork(createNetworkModel)
{
    const res = await execShellCommand(extract(createNetworkModel));
    console.log(res);
}