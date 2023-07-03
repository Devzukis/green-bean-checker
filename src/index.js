import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./utils/ContextProvider";
import App from "./app/App";

import '@rainbow-me/rainbowkit/styles.css';

import {
  connectorsForWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
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
import {
  rainbowWallet,
  walletConnectWallet,
  metaMaskWallet,
  omniWallet,
  trustWallet,
  imTokenWallet,
  argentWallet,
  coinbaseWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';

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

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains }),
      walletConnectWallet({ chains }),
      rainbowWallet({ chains }),
      coinbaseWallet({ chains }),
    ],
  },
  {
    groupName: 'Others',
    wallets: [
      trustWallet({ chains }),
      ledgerWallet({ chains }),
      argentWallet({ chains }),
      omniWallet({ chains }),
      imTokenWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,//true,false
  connectors,
  provider
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider
      modalSize="compact"//wide,compact
      chains={chains}
      theme={darkTheme({
        accentColor: 'rgba(255, 255, 255, 0.2)',
        accentColorForeground: 'white',
        borderRadius: 'none',
        fontStack: 'system',
        overlayBlur: 'small',
      })}
    >
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </RainbowKitProvider>
  </WagmiConfig>
);
