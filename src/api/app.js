let express = require("express");
let app = express();
let NetworksGateway = require("./Networks/Gateway/NetworksGateway");
let ImagesGateway = require("./Images/Gateway/ImagesGateway");
let ContainersGateway = require("./Containers/Gateway/ContainersGateway");


app.listen(3001);

function handleError(res, status = 400, message = {"error": true}) {
    return res.status(status).send(message);
}

app.get("/networks", async(req, res) => {
    let networkList = await getList();
    let response = [];

    for (let network of networkList) {
        if (network === 'none') continue;
        response.push(await getDetails(network));
    }

    await res.json(response);
});

app.get("/images", async(req, res) => {
    let imageList = await getImageList();
    return res.json(imageList)
});

app.get("/containers", async(req, res) => {
    let imageList = await getContainerList();
    return res.json(imageList)
});

app.get("/containers/:containerId", async(req, res) => {
    await getContainerDetails(req.params.containerId)
        .then(containerDetails => res.json(containerDetails))
        .catch(err => handleError(res, 404));
});

getImageList = async() => {
    return new Promise((resolve) => {
        resolve(ImagesGateway.list());
    });
};

getContainerDetails = async (containerId) => {
    return new Promise((resolve) => {
        resolve(ContainersGateway.details(containerId))
    });
};

getContainerList = async () => {
    return new Promise((resolve) => {
        resolve(ContainersGateway.list());
    });
}

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
