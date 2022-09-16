const hre = require("hardhat");

async function main() {
  const DonutToken = await hre.ethers.getContractFactory("testERC721AContract");
  console.log("Deploying DonutToken ERC721 token...");
  const token = await DonutToken.deploy("Test", "TESTING");
  console.log("DonutToken deployed to:", token.address);
}
main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
