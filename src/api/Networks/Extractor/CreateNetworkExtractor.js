module.exports = {
    extract: (CreateNetworkModel) => {
        let commandBase = command;
        commandBase = commandBase.replace('{{name}}', CreateNetworkModel.name);
        commandBase = commandBase.replace('{{options}}', extractOptions(CreateNetworkModel));

        return commandBase;
    }
}

let command = "docker network create {{options}} {{name}}";
let subnetOption = "--subnet {{subnet}}";
let gatewayOption = "--gateway {{gateway}}"

let extractOptions = (CreateNetworkModel) => {
    let optionsString = "";

    optionsString += " " + extractGateways(CreateNetworkModel.networksGateway) + " ";

    return optionsString;
}

let extractGateways = (NetworksGateway) => {
    let gatewayOptionString = "";

    for (let NetworkGateway of NetworksGateway) {
        gatewayOptionString += subnetOption.replace("{{subnet}}", NetworkGateway.subnet) + " ";
        gatewayOptionString += gatewayOption.replace("{{gateway}}", NetworkGateway.gateway)
    }

    return gatewayOptionString;
}