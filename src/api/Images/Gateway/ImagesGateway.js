let { execShellCommand } = require("./../../Common/Gateway/CommonGateway");

module.exports = {
    list: async () => {
        let imagesList = [];
        const res = await execShellCommand(`docker images --format "{{json .}}"`);
        const imageListOutput = res.split('\n');
        for (let image of imageListOutput) {
            if(image) imagesList.push(JSON.parse(image));
        }
        return imagesList
    }
};
