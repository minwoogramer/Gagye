import { BigNumber, ethers } from "ethers";
import GLTFabi from "./GLTFjson";
import { Web3Modal } from "web3modal";
const mintAddress = "0xeC4128032a6584cEa1EfD70Ee62e88F8110cba75";

// const providerOptions = {
//   walletconnect: {
//     package: WalletConnectProvider, // required
//     cacheProvider: true,
//     options: {
//       appName: "web3Modal ",
//       infuraId: "https://rinkeby.infura.io/v3/f205e2d61653432c996724150f59c1e3",
//       darkMode: true, // required
//     },
//   },
// };
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
