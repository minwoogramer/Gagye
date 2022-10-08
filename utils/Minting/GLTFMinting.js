import { BigNumber, ethers } from "ethers";
import GLTFabi from "./GLTFjson";
import SKPabi from "./SKPJson";
import dotenv from "dotenv";
dotenv.config();
const GLTFMintAddress = process.env.CONTRACT_ADDRESS1;
const SKPMintAddress = process.env.CONTRACT_ADDRESS2;
export const MintingStart1 = async ({ address }) => {
  if (address != "") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      "0x44a38729541d7739Ba9c32b439bBb92ae72a88e1",
      GLTFabi,
      signer
    );
    try {
      const tx = await contract.publicmint(1, {
        value: ethers.utils.parseEther((0.02).toString()),
      });
      const res = await tx.wait();
      console.log(res);
    } catch (err) {
      console.log("error", err);
    }
  }
};
//use ethers for RPCCall to Contract functions
//this function need to Contract Address, ABI , signer
export const MintingStart2 = async ({ address }) => {
  if (address != "") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(SKPMintAddress, SKPabi, signer);
    try {
      const tx = await contract.publicmint(BigNumber.from(1), {
        value: ethers.utils.parseEther((0.5).toString()),
      });
      const res = await tx.wait();
      console.log(res);
    } catch (err) {
      console.log("error", err);
    }
  }
};
