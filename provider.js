import { ethers } from "ethers";

import { config } from "./dapp.config";

export const testNetProvider = new ethers.providers.JsonRpcProvider(
  config.testnet
);
//use testnet georli
//if you want to use mainnet
export const mainNetProvider = new ethers.providers.JsonRpcProvider(
  config.mainnet
);
