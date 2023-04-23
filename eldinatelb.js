async function ELDblockNumber(){
    const blockNumber = await eldinateweb3.eth.getBlockNumber();
    console.log(blockNumber);
}

async function ELDblockNumber_INNER(){
    const blockNumber = await eldinateweb3.eth.getBlockNumber();
    document.getElementById("blockNumberINNER").innerHTML = blockNumber;
}

async function createWallet(){
    const createWallet = await eldinateweb3.eth.accounts.create();
    const PublicKey = createWallet["address"];
    const PrivateKey = createWallet["privateKey"];
}

async function createWallet_INNER(){
    const createWallet = await eldinateweb3.eth.accounts.create();
    const PublicKey = createWallet["address"];
    const PrivateKey = createWallet["privateKey"];
    document.getElementById("createWalletINNER").innerHTML = "Public:"+PublicKey+" | Private:"+PrivateKey;
}

async function createSignHash(hashMessage){
    const signMessage = eldinateweb3.eth.accounts.hashMessage(hashMessage);
    console.log(signMessage);
}

async function createSignHash_INNER(hashMessage){
    const signMessage = eldinateweb3.eth.accounts.hashMessage(hashMessage);
    document.getElementById("createSignHashINNER").innerHTML = "hashMessage: "+signMessage;
}

async function signWallet(data, privateKey){
    const signWalletData = eldinateweb3.eth.accounts.sign(data, privateKey);
    console.log(signWalletData);
}

async function signWallet_INNER(data, privateKey){
    const signWalletResult = eldinateweb3.eth.accounts.sign(data, privateKey);
    document.getElementById("signWalletINNER").innerHTML = signWalletResult["signature"];
}

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

async function connectWalletDEMO() {
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
    /* Only Developer Portal Inner DEMO!! */
    const web3Wallet = window.userWalletAddress;
    console.log(web3Wallet);
    document.getElementById("connectWalletINNER").innerHTML = web3Wallet;
  }
}
