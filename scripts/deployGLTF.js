const hre = require("hardhat");

async function main() {
  const GLTFNFT = await hre.ethers.getContractFactory("GLTFNFT");
  const gltfNFT = await GLTFNFT.deploy();

  await gltfNFT.deployed();

  console.log("GlTFNFT deployed successfully :", gltfNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
