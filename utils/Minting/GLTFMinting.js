import { BigNumber, ethers } from "ethers";
import GLTFabi from "./GLTFjson";
import SKPabi from "./SKPJson";
import dotenv from "dotenv";
dotenv.config();

export const MintingStart1 = async ({ address }) => {
  if (address != "") {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const GLTFcontract = new ethers.Contract(
        "0x44a38729541d7739Ba9c32b439bBb92ae72a88e1",
        GLTFabi,
        signer
      );
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
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const SKPcontract = new ethers.Contract(
        "0x472aCC0C3A3FC23FFd25eB29B497F9Ef0fd7eb21",
        SKPabi,
        signer
      );
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
  const GLTFcontract = new ethers.Contract(
    "0x44a38729541d7739Ba9c32b439bBb92ae72a88e1",
    GLTFabi,
    signer
  );
  const totalMinted = await GLTFcontract.totalSupply();
  const currentSP = 50 - totalMinted;
  return currentSP;
};
export const SKPCurrentSupply = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const SKPcontract = new ethers.Contract(
    "0x472aCC0C3A3FC23FFd25eB29B497F9Ef0fd7eb21",
    SKPabi,
    signer
  );
  const totalMinted = await SKPcontract.totalSupply();
  console.group(totalMinted, "total");
  const currentSP = 50 - totalMinted;
  return currentSP;
};
