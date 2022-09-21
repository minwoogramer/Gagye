const { task } = require("hardhat/config");
const dotenv = require("dotenv");
require("hardhat-gas-reporter");
dotenv.config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

task("account", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigner();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337, // config standard
    },
    // mainnet: {
    //   url: `https://mainnet.infura.io/v3/f205e2d61653432c996724150f59c1e3`,
    //   accounts: [keyData],
    // },
    ropsten: {
      url: process.env.ROPSTEN_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    currency: "USD",
    gasPrice: 21,
  },
};
