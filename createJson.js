const nftName = "Test";
const description = "Test, Test ERC721";
const hiddenImgUrl = "ipfs://QmZP6Ezj4TbEEWHowJKfE8JNsVtgHJpXygCv1YeFY8ZL59/";
const animation_url =
  "https://gateway.pinata.cloud/ipfs/QmeGqs4swAukbdYN5VHJMECSXVJnBhoWBYiDfTM7eENiCT";
const totalNum = 50;

try {
  for (let i = 1; i <= totalNum; i++) {
    let json = `{"name":"${nftName} #${i}","description":"${description}","image":"${hiddenImgUrl}","animation_url":"${animation_url}","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
    let fs = require("fs");
    fs.writeFile(`json/${i}.json`, json, "utf8", (e) => e);
  }
  console.log("complete!");
} catch (error) {
  console.log(error);
}
//json파일만드는 함수
