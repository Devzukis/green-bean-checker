import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./utils/ContextProvider";
import App from "./app/App";

import { configureChains, createClient, WagmiConfig } from 'wagmi';
import {
  mainnet,
  goerli,
  polygon,
  sepolia,
  polygonMumbai,
  optimism,
  optimismGoerli
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [
    mainnet,
    goerli,
    sepolia,
    optimism,
    optimismGoerli,
    polygon,
    polygonMumbai
  ],
  [
    publicProvider()
  ]
);

const wagmiClient = createClient({
  chains,
  provider
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WagmiConfig client={wagmiClient}>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </WagmiConfig>
);
