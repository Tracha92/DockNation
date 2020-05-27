let { execShellCommand, parseTemplate } = require("./../../Common/Gateway/CommonGateway");
const template = require("../Template/ImagesTemplate");

module.exports = {
    list: async () => {
        let imagesList = [];
        const res = await execShellCommand(`docker images --format ${parseTemplate(template)}`);
        const imageListOutput = res.split('\n');
        for (let image of imageListOutput) {
            if(image) imagesList.push(JSON.parse(image));
        }
        return imagesList
    }
};
