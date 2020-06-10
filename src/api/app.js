const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const cors = require('cors')
let NetworksGateway = require("./Networks/Gateway/NetworksGateway");
let ImagesGateway = require("./Images/Gateway/ImagesGateway");

app.listen(3001);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);
app.use(cors());

router.get("/networks", async(req, res) => {
    let networkList = await getList();
    let response = [];

    for (let network of networkList) {
        if (network === 'none') continue;
        response.push(await getDetails(network));
    }

    await res.json(response);
});

router.post("/create-network", async(req, res) => {
    let result = await createNetwork(req.body);
    await res.json(result);
});

router.get("/images", async(req, res) => {
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