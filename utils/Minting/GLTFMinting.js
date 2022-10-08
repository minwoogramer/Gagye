import { BigNumber, ethers } from "ethers";
import GLTFabi from "./GLTFjson";
import SKPabi from "./SKPJson";
import dotenv from "dotenv";
dotenv.config();
const GLTFMintAddress = process.env.CONTRACT_ADDRESS1;
const SKPMintAddress = process.env.CONTRACT_ADDRESS2;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const GLTFcontract = new ethers.Contract(GLTFMintAddress, GLTFabi, signer);
const SKPcontract = new ethers.Contract(SKPMintAddress, SKPabi, signer);

export const MintingStart1 = async ({ address }) => {
  if (address != "") {
    try {
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
//use ethers for RPCCall to Contract functions
//this function need to Contract Address, ABI , signer
export const MintingStart2 = async ({ address }) => {
  if (address != "") {
    try {
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
  const totalMinted = await GLTFcontract.totalSupply();
  const currentSP = 50 - totalMinted;
  if (typeof totalMinted == "number") return currentSP;
};
export const SKPCurrentSupply = async () => {
  const totalMinted = await SKPcontract.totalSupply();
  const currentSP = 50 - totalMinted;
  if (typeof totalMinted == "number") return currentSP;
};
