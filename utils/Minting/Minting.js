import { BigNumber, ethers } from "ethers";
import GLTFabi from "./GLTFjson";
import SKPabi from "./SKPJson";
import dotenv from "dotenv";
dotenv.config();
import { config } from "../../dapp.config";

export const MintingStart1 = async ({ address }) => {
  if (address != "") {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const GLTFcontract = new ethers.Contract(config.GLTFCA, GLTFabi, signer);
      const tx = await GLTFcontract.publicmint(1, {
        value: ethers.utils.parseEther((0.02).toString()),
      });
      const res = await tx.wait();
      console.log(res);
    } catch (err) {
      console.log("error", err);
    }
  }
};
//use ethers for Contract functions on RPCCall
//this function need to Contract Address, ABI , signer
export const MintingStart2 = async ({ address }) => {
  if (address != "") {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const SKPcontract = new ethers.Contract(config.SKPCA, SKPabi, signer);

      const tx = await SKPcontract.publicmint(BigNumber.from(1), {
        value: ethers.utils.parseEther((0.5).toString()),
      });
      const res = await tx.wait();
      console.log(res);
    } catch (err) {
      console.log("error", err);
    }
  }
};
export const GLTFCurrentSupply = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const GLTFcontract = new ethers.Contract(config.GLTFCA, GLTFabi, signer);
  const totalMinted = await GLTFcontract.totalSupply();
  const currentSP = 50 - totalMinted;
  return currentSP;
};
export const SKPCurrentSupply = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const SKPcontract = new ethers.Contract(config.SKPCA, SKPabi, signer);

  const totalMinted = await SKPcontract.totalSupply();
  console.group(totalMinted, "total");
  const currentSP = 50 - totalMinted;
  return currentSP;
};
