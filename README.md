# DonutGagye Miting project
This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```javascript
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

```javascript
1.yarn add hardhat
2.yarn add @openzeppelin/contracts
3.yarn add @nomicfoundation/hardhat-toolbox "@nomicfoundation/hardhat-chai-matchers@^1.0.0" "@nomiclabs/hardhat-ethers@^2.0.0" "@nomiclabs/hardhat-etherscan@^3.0.0" "@types/chai@^4.2.0" "@types/mocha@^9.1.0" "@typechain/ethers-v5@^10.1.0" "@typechain/hardhat@^6.1.2" "chai@^4.2.0" "hardhat-gas-reporter@^1.0.8" "solidity-coverage@^0.8.1"
4.hardhat.config.js setting
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
```
#You need Infura API key, etherscan API key
## you must change networks testnet to mainnet
## WalletConnect, MitingProcess , Hardhat.config.js

```javascript
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "mainnet",
  networks: {
    hardhat: {},
    mainnet: {
      url: process.env.MAIN_RPC_URL,
      accounts: [process.env.AC],
    },
    georli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.AC],
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
  etherscan: {
    apiKey: {
      //networks:apiKey
      goerli: process.env.ETHERSCAN_KEY,
    },
  },
};
```
```javascript
npx hardhat compile
npx hardhat run scripts/deployContract.js
go artifacts
check contract folder
copy contract file then
copy abi code
mkdir ContractABi.json
if you want to use contract
you need to have 3 items: ContractAccount, ABI, Signer  
```
##If you want to 3d model minting? follow this process
1. upload png pinataCloud
2. upload GLTF pinataCloud
3. get all CID
4. Put inside Json file
5. upload Json file folder
```json
{"name":"Test #1",
"description":"Please put inside Description",
"image":"ipfs://CID/.png",
"animation_url":"ipfs://CID" put inside 3D IPFS URL,
"attributes":[{"trait_type": "Unknown","value": "Unknown"}]}
```