import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();
const GLTFMintAddress = process.env.CONTRACT_ADDRESS1;

const Contract = new ethers.Contract(GLTFMintAddress);
export const SetBaseUri = ({ baseTokenUri }) => {
  Contract.setBaseTokenUri(baseTokenUri);
};

export const WithDraw = () => {
  Contract.withdraw();
};

export const Pause = () => {
  Contract.togglePause();
};

export const totalSupply = () => {
  Contract.totalSupply();
};
