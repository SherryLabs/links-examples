import { Hono } from 'hono'
import { 
  Abi, 
  BlockchainActionMetadata, 
  Metadata, 
  createMetadata,
  ValidatedMetadata 
} from '@sherrylinks/sdk'

const app = new Hono()

app.get('/api/mini-app', (c) => {
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
    functionName: "setGreeting",
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

  return c.json(metadataResponse)
})

export default app
