const express = require('express');
const app = express();
const port = 8081;
const { createMetadata } = require("@sherrylinks/sdk")

app.get('/api/mini-app', (req, res) => {
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
        ]

        const action = {
            label: "Click",
            contractAddress: "0x1234567890123456789012345678901234567890",
            contractABI: abi,
            functionName: "setGreeting",
            chainId: "avalanche",
        }

        const metadata = {
            type: "action",
            icon: "https://your-domain.com/api/mini-app-image",
            title: "Hello, World!",
            description: "This is a mini app that greets the world.",
            actions: [action]
        };

        const validatedMetadata = createMetadata(metadata)

        res.status(200).json(validatedMetadata)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }


});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});