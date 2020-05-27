let {execShellCommand} = require("./../../Common/Gateway/CommonGateway");

module.exports = {
    list: async () => {
        let containersList = [];
        const res = await execShellCommand(`docker container ls -a --format "{{json .}}"`);
        const containerListOutput = res.split('\n');
        for (let container of containerListOutput) {
            if(container) containersList.push(JSON.parse(container));
        }
        return containersList
    },
    details: async (containerId) => {
        const res = await execShellCommand(`docker container stats --no-stream ${containerId} --format "{{json .}}"`);
        if (res) return JSON.parse(res);
    }
}
