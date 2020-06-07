let express = require("express");
let app = express();
let NetworksGateway = require("./Networks/Gateway/NetworksGateway");
let ImagesGateway = require("./Images/Gateway/ImagesGateway");

app.listen(3001);

app.get("/networks", async(req, res) => {
    let networkList = await getList();
    let response = [];

    for (let network of networkList) {
        if (network === 'none') continue;
        response.push(await getDetails(network));
    }

    await res.json(response);
});

app.post("/create-network", async(req, res) => {
    let result = await createNetwork(req);
    await res.json(result);
});

app.get("/images", async(req, res) => {
    let imageList = await getImageList();
    return res.json(imageList)
});

let getImageList = async() => {
    return new Promise((resolve) => {
        resolve(ImagesGateway.list());
    });
};

let getDetails = async(networkName) => {
    return new Promise((resolve) => {
        resolve(NetworksGateway.details(networkName));
    });
}

let getList = async() => {
    return new Promise((resolve) => {
        resolve(NetworksGateway.list());
    });
}

let createNetwork = async(data) => {
    return new Promise((resolve) => {
       resolve(NetworksGateway.create(data));
    });
}