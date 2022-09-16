require("@nomicfoundation/hardhat-toolbox");

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
      url: `https://ropsten.infura.io/v3/f205e2d61653432c996724150f59c1e3`,
      accounts: [
        `238d199217a32c8829d91dde7e0b15dd6d724fd7c5367e41973441f180e0a893`,
      ],
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
};
