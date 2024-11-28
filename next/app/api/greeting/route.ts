import { NextRequest, NextResponse } from "next/server";
import { Metadata, BlockchainActionMetadata, Abi, createMetadata, ValidatedMetadata } from "@sherrylinks/sdk"

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const abi: Abi = [
            {
                "inputs": [],
                "name": "greet",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
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
        return NextResponse.json(metadataResponse, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}