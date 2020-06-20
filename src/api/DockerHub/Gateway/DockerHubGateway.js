let {execShellCommand} = require("./../../Common/Gateway/CommonGateway");

module.exports = {
    list: async function({name}) {
        return await getDockerHubList(name);
    }
}

async function getDockerHubList(name) {
    const res = await execShellCommand('docker search ' + name + ' --no-trunc --format "{{json .}},"');
    if (res.data === "") {
        return {};
    }

    const resRendered = "[" + res.data.substring(0, res.data.length - 2) + "]";
    return JSON.parse(resRendered);
}