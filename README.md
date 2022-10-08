# DonutGagye Miting project
This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

```shell
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

```shell
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
      url: "https://mainnet.infura.io/v3/f205e2d61653432c996724150f59c1e3",
      accounts: [
        "0x238d199217a32c8829d91dde7e0b15dd6d724fd7c5367e41973441f180e0a893",
      ],
    },
    georli: {
      url: "https://goerli.infura.io/v3/f205e2d61653432c996724150f59c1e3",
      accounts: [
        "0x238d199217a32c8829d91dde7e0b15dd6d724fd7c5367e41973441f180e0a893",
      ],
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
      goerli: "AAZIZDH7QXTQAN6HPM4J7K6TEIWETXXP2U",
    },
  },
};
```
