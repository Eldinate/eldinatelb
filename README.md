
# EldinateLB.JS

## BlockNumber

You can use the ELDblockNumber function in the EldinateLB.js library to call the last block number processed in the blockchain.

```bash
 <script>ELDblockNumber()</script>
	JS || const blockNumber;
	View Console (F12)

  async function ELDblockNumber(){
    const blockNumber = await eldinateweb3.eth.getBlockNumber();
    console.log(blockNumber);
  }
```

## Create Wallet

If you want to create a new and unique wallet on your existing blockchain, use the createWallet function in the EldinateLB.js library.

```bash
 <script>createWallet()</script>
	JS || const PublicKey;
	JS || const PrivateKey;

  async function createWallet(){
    const createWallet = await eldinateweb3.eth.accounts.create();
    const PublicKey = createWallet["address"];
    const PrivateKey = createWallet["privateKey"];
  }
```

## Create Sign hashMessage

You can use the CreateSignHash function in the EldinateLB.js library to generate hashMessages for the relevant texts for the Sign operation permission.

```bash
  <script>createSignHash("Message")</script>
	  JS || const signMessage;
		View Console (F12)

  async function createSignHash(hashMessage){
    const signMessage = eldinateweb3.eth.accounts.hashMessage(hashMessage);
    console.log(signMessage);
  }
```

## Sign Wallet (Private Key)

If you want to match the wallet with the corresponding Hash Message using Private Key, you can use the EldinateLB.js signWallet function.

```bash
  <script>signWallet("signMessage","PrivateKey")</script>
		JS || const signWalletResult;
		JS || Console Path: message;
		JS || Console Path: messageHash;
		JS || Console Path: r;
		JS || Console Path: v;
		JS || Console Path: s;
		JS || Console Path: signature;
		View Console (F12)
										
  async function signWallet(data, privateKey){
    const signWalletData = eldinateweb3.eth.accounts.sign(data, privateKey);
    console.log(signWalletData);
  }
```

## Connect Wallet

You can use the ConnectWallet function in the EldinateLB.js library to connect your wallet to the relevant platform.

```bash
  <script>connectWallet()</script>
		JS || const web3Wallet;
										
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
```

You need to call a JavaScript library to implement the Eldinate Web2.0 and Web3.0 protocol and to provide the connection that we describe as a middleware. You can simply connect to the Web3 infrastructure by calling the code below (the one that suits you).
  
