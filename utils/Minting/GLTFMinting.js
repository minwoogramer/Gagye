import { BigNumber, ethers } from "ethers";
import GLTFabi from "./GLTFjson";
import dotenv from "dotenv";
dotenv.config();
const mintAddress = process.env.CONTRACT_ADDRESS;

//컨트랙트주소 넣는 곳
export const MintingStart = async ({ address }) => {
  if (address != "") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(mintAddress, GLTFabi, signer);
    try {
      const tx = await contract.mint(BigNumber.from(1), {
        value: ethers.utils.parseEther((0.02).toString()),
      });
      const res = await tx.wait();
      console.log(res);
    } catch (err) {
      console.log("error", err);
    }
  }
};
