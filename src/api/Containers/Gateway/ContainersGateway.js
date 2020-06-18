let {execShellCommand} = require("./../../Common/Gateway/CommonGateway");

module.exports = {
    list: async function() {
        const res = await execShellCommand('docker ps --all --format "{{json .}}"');
    }
}