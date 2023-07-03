import ContractABI from "./contractABI.json";
import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;

const contractAddress = "0xdfaa1a2d917df08ea9eae22fec2dd729aa93f97b";

//contract configuration
export const contractConfig = {
    address: contractAddress,
    abi: ContractABI,
}

// check if token id has claimed yet
export const getCanClaims = (tokenID) => ({
    ...contractConfig,
    functionName: 'getCanClaims',
    args: [tokenID],
})

//maximum mint per wallet
export const maxMintPerWalletCall = {
    ...contractConfig,
    functionName: 'maxMintAmount',
    watch: true,
}

//maximum supply
export const maxSupplyCall = {
    ...contractConfig,
    functionName: 'maxSupply',
    watch: true,
}

//total minted items
export const totalMintedCall = {
    ...contractConfig,
    functionName: 'totalSupply',
    watch: true,
}

//public mint cost
export const publicMintCostCall = {
    ...contractConfig,
    functionName: 'cost',
    watch: true,
}

//public mint
export const publicMintCall = {
    ...contractConfig,
    functionName: 'mint',
}