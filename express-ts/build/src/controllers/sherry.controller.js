"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.miniApp = miniApp;
const sdk_1 = require("@sherrylinks/sdk");
function miniApp(req, res) {
    try {
        const abi = [
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_greeting",
                        "type": "string"
                    }
                ],
                "name": "setGreeting",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ];
        const action = {
            label: "Click",
            contractAddress: "0x1234567890123456789012345678901234567890",
            contractABI: abi,
            functionName: "greet",
            chainId: "avalanche",
        };
        const metadata = {
            type: "action",
            icon: "https://your-domain.com/api/mini-app-image",
            title: "Hello, World!",
            description: "This is a mini app that greets the world.",
            actions: [action]
        };
        const metadataResponse = (0, sdk_1.createMetadata)(metadata);
        res.status(200).json(metadataResponse);
    }
    catch (error) {
        res.status(500).json(error);
    }
}
