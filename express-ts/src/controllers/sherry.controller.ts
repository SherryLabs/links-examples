import { Request, Response } from 'express';
import { Metadata, BlockchainActionMetadata, Abi, createMetadata, ValidatedMetadata } from "@sherrylinks/sdk"

export function miniApp(req: Request, res: Response) {
    try {
        const abi: Abi = [
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
        ] as const

        const action: BlockchainActionMetadata = {
            label: "Click",
            contractAddress: "0x1234567890123456789012345678901234567890",
            contractABI: abi,
            functionName: "greet",
            chainId: "avalanche",
        }

        const metadata: Metadata = {
            type: "action",
            icon: "https://your-domain.com/api/mini-app-image",
            title: "Hello, World!",
            description: "This is a mini app that greets the world.",
            actions: [action]
        };

        const metadataResponse: ValidatedMetadata = createMetadata(metadata);
        res.status(200).json(metadataResponse);
    } catch (error) {
        res.status(500).json(error);
    }
}