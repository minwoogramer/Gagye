
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';


contract GLTFNFT is ERC721, Ownable{
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    
    bool public isPubliceMintEnabled;

    string internal baseTokenUri;
    //이미지 Url 이므로 안보이게해야함 internal

    address payable public withdrawWallet;

    mapping(address => uint256) public walletMints;
    //컨트랙트가 유저가 얼마나 Minting했는지 Keep tracking하게해줌

    constructor() payable ERC721('GLTFs', 'GL'){
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 50;
        maxPerWallet = 1;
        isPubliceMintEnabled = true;
    }
  
    function setIsPubliceMintEnabled(bool isPubliceMintEnabled_) external onlyOwner {
      isPubliceMintEnabled = isPubliceMintEnabled_;
    }
   //_를넣는 이유는 들어가는 녀석이 argument라는것을 표시하기위함
    function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner {
        baseTokenUri = baseTokenUri_;
    }

    function tokenURI(uint256 tokenId_) public view override returns (string memory){
        require(_exists(tokenId_), 'Token does not exist!');
        return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_),".json"));
    }
    //이녀석을 통해 오픈씨에서 이미지를 볼 수 있게 됀다.

    function withdraw() external onlyOwner{
        (bool success, ) = withdrawWallet.call{value: address(this).balance }('');
        //success graped 하여서 failed check
        require(success, 'withdraw failed' );
    }

    function mint(uint256 quantity_) public payable{
        require(isPubliceMintEnabled, 'mintting not enabled');
        require(msg.value == quantity_*mintPrice, 'wrong mint value');
        require(totalSupply + quantity_ <= maxSupply, 'sold out');
        require(walletMints[msg.sender] + quantity_ <= maxPerWallet, 'exceed max wallet');

        for(uint256 i = 0; i < quantity_; i++){
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }
}