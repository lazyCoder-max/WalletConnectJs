import {
    EthereumClient,
    w3mConnectors,
    w3mProvider,
    WagmiCore,
    WagmiCoreChains,
} from "https://unpkg.com/@web3modal/ethereum";

import { Web3Modal } from "https://unpkg.com/@web3modal/html@2.6.2";
const { bsc } = WagmiCoreChains;
const { arbitrum } = WagmiCoreChains;
const { mainnet } = WagmiCoreChains;
const { polygon } = WagmiCoreChains;

console.log({ WagmiCoreChains });
const { configureChains, createConfig, getAccount, readContract, fetchBalance, sendTransaction } = WagmiCore;


const chains = [bsc, arbitrum, mainnet, polygon]
const projectId = '2aca272d18deb10ff748260da5f78bfd'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)
const web3modal = new Web3Modal({ projectId }, ethereumClient)
document.addEventListener('DOMContentLoaded', function () {
}, false);
