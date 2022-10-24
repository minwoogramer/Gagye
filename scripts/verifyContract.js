require("@nomiclabs/hardhat-etherscan");
const hre = require("hardhat");
const keccak256 = require("keccak256");
const { MerkleTree } = require("merkletreejs");
const BASE_URI = "ipfs://QmeudsRUJT8ijjkGznYgb3DCuHJzHPU61ESnZguEJzNRW3/";
const proxyRegistryAddressRinkeby =
  "0xf57b2c51ded3a29e6891aba85459d600256cf317";
const proxyRegistryAddressMainnet =
  "0xa5409ec958c83c3f309868babaca7c86dcb077c1";

async function main() {
  const leafNodes = ["0x596fDcDa93bEa4b67C7617aB3524de9191d8Cd6f"].map((addr) =>
    keccak256(addr)
  );
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const root = merkleTree.getRoot();

  await hre.run("verify:verify", {
    address: "0x1030B1677826Ab5254d2a08D99da879b16A4499c",
    constructorArguments: [BASE_URI],
  });
  // await hre.run("verify:verify", {
  //   address: "0x32B3eF57b576A8399a4299D0a83561C598beF402",
  //   constructorArguments: [BASE_URI],
  // });
  // //   constructorArguments: [BASE_URI, root],
  // // });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
