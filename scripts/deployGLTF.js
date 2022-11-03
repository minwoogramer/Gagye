/**
 *  This script will calculate the constructor arguments for BoredApe.sol and deploy it.
 *  After deploying, you can access the contract on etherscan.io with the deployed contract address.
 */

const hre = require("hardhat");
const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

const BASE_URI = "ipfs://QmdkXzTVssRSKgFh1griMRypxHStaVPmjPdYFZgyDRY5Bb/";
//put in here 3dMetaData CID
async function main() {
  // Calculate merkle root from the whitelist array
  const leafNodes = ["0x596fDcDa93bEa4b67C7617aB3524de9191d8Cd6f"].map((addr) =>
    keccak256(addr)
  );
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const root = merkleTree.getRoot();

  // Deploy the contract
  const DonutGagyeGLTF = await hre.ethers.getContractFactory("DonutGagyeGLTF");
  // const donutGagyeGLTF = await DonutGagyeGLTF.deploy(BASE_URI, root);
  const donutGagyeGLTF = await DonutGagyeGLTF.deploy(BASE_URI);

  await donutGagyeGLTF.deployed();

  console.log("donutGagyeGLTF deployed to:", donutGagyeGLTF.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
