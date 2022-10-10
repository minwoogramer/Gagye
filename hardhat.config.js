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
