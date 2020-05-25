const { exec } = require("child_process");

module.exports = {
    list: async function() {
        let networkList = [];
        const res = await execShellCommand('docker network ls --format {{.Name}}');
        const networkListOutput = res.split('\n');

        for (let line = 0; line < networkListOutput.length - 1; line++) {
            networkList.push(networkListOutput[line]);
        }

        return networkList;
    },
    details: async function(networkName) {
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
    },
}

function execShellCommand(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.warn(error);
            }
            resolve(stdout? stdout : stderr);
        });
    });
}