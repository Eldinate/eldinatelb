# EldinateLB.JS

## BlockNumber
async function ELDblockNumber(){
    const blockNumber = await eldinateweb3.eth.getBlockNumber();
    console.log(blockNumber);
}

## Create Wallet
async function createWallet(){
    const createWallet = await eldinateweb3.eth.accounts.create();
    const PublicKey = createWallet["address"];
    const PrivateKey = createWallet["privateKey"];
}

## Create Sign Hash
async function createSignHash(hashMessage){
    const signMessage = eldinateweb3.eth.accounts.hashMessage(hashMessage);
    console.log(signMessage);
}

## Sign Wallet (with Sign Hash Message)
async function signWallet(data, privateKey){
    const signWalletData = eldinateweb3.eth.accounts.sign(data, privateKey);
    console.log(signWalletData);
}

## Connect Wallet
async function connectWallet() {
    if (typeof eldinateweb3 !== 'undefined'){
    if (typeof window.ethereum === 'undefined') {
      alert("Undefined Wallet!");
    }
    if (window.eldinateweb3) {
      try {
        const selectedAccount = await window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((accounts) => accounts[0])
          .catch(() => {
            throw Error("Please select an account");
          });
  
        window.userWalletAddress = selectedAccount;
        window.localStorage.setItem("userWalletAddress", selectedAccount);
  
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Error!");
    }
    const web3Wallet = window.userWalletAddress;
    console.log(web3Wallet);
  }
}
