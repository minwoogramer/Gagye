require("@nomiclabs/hardhat-etherscan");
const hre = require("hardhat");
const keccak256 = require("keccak256");
const { MerkleTree } = require("merkletreejs");
const BASE_URI = "ipfs://QmeudsRUJT8ijjkGznYgb3DCuHJzHPU61ESnZguEJzNRW3/";

async function main() {
  const leafNodes = ["0x596fDcDa93bEa4b67C7617aB3524de9191d8Cd6f"].map((addr) =>
    keccak256(addr)
  );
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const root = merkleTree.getRoot();

  await hre.run("verify:verify", {
    address: "0x7dBb9b6EC0A67E8577D7907504A0d1a464707c0F",
    constructorArguments: [BASE_URI, root],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
