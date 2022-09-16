const nftName = "Test";
const description = "Test, Test ERC721";
const hiddenImgUrl =
  "ipfs.io/ipfs/QmNN8ge8RLirgwx2uQsuuUGmnCdcozVexJc3exF1dj8y2d?filename=Dunning.png";
const totalNum = 5;

try {
  for (let i = 1; i <= totalNum; i++) {
    let json = `{"name":"${nftName} #${i}","description":"${description}","image":"${hiddenImgUrl}","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
    let fs = require("fs");
    fs.writeFile(`json/${i}.json`, json, "utf8", (e) => e);
  }
  console.log("complete!");
} catch (error) {
  console.log(error);
}
//json파일만드는 함수
