require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
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
