let express = require("express");
let app = express();
let NetworksGateway = require("./Networks/Gateway/NetworksGateway");


app.listen(3001);

app.get("/networks", async(req, res) => {
    let networkList = await getList();
    let response = [];

    for (let network of networkList) {
        if (network === 'host' || network === 'none') continue;
        response.push(await getDetails(network));
    }

    await res.json(response);
});

async function getDetails(networkName)
{
    return new Promise((resolve) => {
        resolve(NetworksGateway.details(networkName));
    });
}

async function getList()
{
    return new Promise((resolve) => {
        resolve(NetworksGateway.list());
    });
}