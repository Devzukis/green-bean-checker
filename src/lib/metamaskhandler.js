const ethereum = typeof window !== 'undefined' ? window.ethereum : '';


// check if metamask extension is installed on the browser
export const isMetaMaskInstalled = () =>{
    if(ethereum){
        return true;
    }

    return false;
}


// connect to metakmask wallet
export const connectWallet = async () =>{
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    
    return accounts;
}

// connect to metakmask wallet
export const isAccountConnected = async () =>{
    if(typeof ethereum !== 'undefined'){
        const accounts = await ethereum.request({method: 'eth_accounts'});

        return accounts;
    }
}




// check metamask on disconnect
if(isMetaMaskInstalled()){
    ethereum.on('accountsChanged', () =>{
        window.location.reload();
    });
}

/*-- unused --*/
/*
// disconnect metamask wallet
const disconnectWallet = () =>{
    localStorage.removeItem('isWalletConnected');
    window.location.reload();
}

// check metamask on connected
const onMetamaskconnect = async () =>{
    const chainId = await getChainId();
    ethereum.on('connect', () =>{
        console.log(chainId);
    });
}

// on chain change
const onChainChange = () =>{
    ethereum.on('chainChanged', (_chainId) =>{
        return parseInt(_chainId);
    });
}

const getChainId = async () =>{
    const chainId = await ethereum.request({ method: 'eth_chainId' });

    return parseInt(chainId);
}

//iswallet connected
const isWalletConnected = () => {
    if(localStorage.getItem('isWalletConnected') === 'true'){
        return true
    }

    return false;
}

//connect wallet localy
const connectWalletLocaly = () => {
    localStorage.setItem('isWalletConnected', true);
}
*/