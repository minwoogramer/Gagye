// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
contract DonutGagyeGLTF is 
    ERC721, 
    IERC2981,
    Ownable, 
    ReentrancyGuard
     {
     //type setting it is just using convert
    using Strings for uint256;
    using Counters for Counters.Counter;
    //MerkleProof parameter
    bytes32 public root;
   //MintingInfo 
    uint256 public mintPrice;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
     uint256 public royalty = 50; // 50 is divided by 10 in the royalty info function to make 7.5%
    //MitingProcess control
    bool public isPublicEnabled;
    bool public isPresaleMintEnabled;
    bool public paused = false;
    bool public revealed = false;

    string internal baseTokenUri;
    //이미지 Url 이므로 안보이게해야함 internal
    //"ipfs://CID/hidden.json";

    string public notRevealedUri = "ipfs://CID/hidden.json";
    string public baseExtension = ".json";

    uint256 maxMintAmountPerTx = 1;
    mapping(address => uint256) public walletMints;

    mapping(address => uint256) public _presaleClaimed;
    //컨트랙트가 유저가 얼마나 Minting했는지 Keep tracking하게해줌
    //developer can keep tracking user how many minting on your contract
    Counters.Counter private _tokenIds;
    //developer can Count TokenId use this code
    constructor(string memory uri) ERC721('DonutGLTF', 'Gagye')
     ReentrancyGuard() // A modifier that can prevent reentrancy during certain functions
     {
        mintPrice = 0.02 ether;
        //MiningPirce setting
        maxSupply = 50;
        //maxSupply setting
        maxPerWallet = 1;
        //each walletMints how many
        isPublicEnabled = true;
        //MitingEnabled Check
        // root = merkleroot;
        //use for preminting on merkleroot
        setBaseTokenUri(uri);
        //you can set NFTURI this parameters
    }
    
    function setisPublicEnabled(bool isPublicEnabled_) external onlyOwner {
      isPublicEnabled = isPublicEnabled_;
    }
    //use for PublicMintingEnabled

   //_를넣는 이유는 들어가는 녀석이 argument라는것을 표시하기위함
    function setBaseTokenUri(string memory baseTokenUri_) public onlyOwner {
        baseTokenUri = baseTokenUri_;
    }
    //you can set BaseTokenUri this function in etherscan when connect MetaMask of Owner

     function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
        notRevealedUri = _notRevealedURI;
    }
    //if you set HiddenUri? use This function then, set NetRevealURI 

     function setMerkleRoot(bytes32 merkleroot) 
    onlyOwner 
    public 
    {
        root = merkleroot;
    }
    //MerkleRoot Setting
 
     function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );
     
        string memory currentBaseURI = _baseURI();
    
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        tokenId.toString(),
                        baseExtension
                    )
                )
                : "";
    }
    //이녀석을 통해 오픈씨에서 이미지를 볼 수 있게 됀다.
    //You can See Img on opensea because this function set from tokenURI to OpenSeaTokenURI 

    function withdraw() external onlyOwner {
        // This is a test to ensure we have atleast withdrawn the amount once in production.
        payable(owner()).transfer(address(this).balance);
    }
    //외부 컨트랙트가 현재 컨트랙트를 호출하지 못하게 막는것
    //other contract can't call our contract because of this function
    modifier onlyAccounts () {
        require(msg.sender == tx.origin, "Not allowed origin");
        _;
    }
    //checking current MerkleProof account info
     modifier isValidMerkleProof(bytes32[] calldata _proof) {
         require(MerkleProof.verify(
            _proof,
            root,
            keccak256(abi.encodePacked(msg.sender))
            ) == true, "Not allowed origin");
        _;
   }
  //checking _proof parameters because this rootAddress correct MerkleRoot
   function togglePause() public onlyOwner {
        paused = !paused;
    }
  //You can use this function for Minting process paused
    function togglePresale() public onlyOwner {
        isPresaleMintEnabled = !isPresaleMintEnabled;
    }
  //You can use this function for presaleMintingEnabled
     function togglePublicSale() public onlyOwner {
        isPublicEnabled = !isPublicEnabled;
    }
    //You can use this function for PublicMintingEnabled
     function mintInternal() internal nonReentrant {
        _tokenIds.increment();

        uint256 tokenId = _tokenIds.current();
        _safeMint(msg.sender, tokenId);
    }
    //tracking for security Issue for Minting Process for infinite Minting and tracking user who Minting each TokenId of NFT
    function publicmint(uint256 quantity_)
    external 
    payable
    onlyAccounts
    {   
     
        require(isPublicEnabled, 'mintting not enabled');
        require(msg.value == quantity_*mintPrice, 'wrong mint value');
        uint current = _tokenIds.current();
        require(
            current + quantity_ <= maxSupply,
            "DonutGagye: max supply exceeded"
        );
        require(walletMints[msg.sender] + quantity_ <= maxPerWallet, 'exceed max wallet');
     //tracking for security Issue for Minting Process for infinite Minting and tracking user who Minting each TokenId of NFT
     //and how many Minting , not use Balance function
 
         for (uint i = 0; i < quantity_; i++) {
            mintInternal();
        }
        //this for context can multiple mint user who using mingpage
    }
    function presaleMint(address account, uint256 quantity_, bytes32[] calldata _proof)
    external
    payable
    isValidMerkleProof(_proof)
    onlyAccounts
    {
        require(msg.sender == account,          "DonutGagye: Not allowed");
        require(isPresaleMintEnabled,                       "DouutGagye: Presale is OFF");
        require(!paused,                        "DonutGagye: Contract is paused");
        require(
            quantity_ <= maxMintAmountPerTx,      "DonutGagye: You can't mint so much tokens");
        require(
            _presaleClaimed[msg.sender] + quantity_ <= maxMintAmountPerTx,  "DonutGagye: You can't mint so much tokens");
          uint current = _tokenIds.current();
           require(
            current + quantity_ <= maxSupply,
            "DonutGagye: Max supply exceeded"
        );
        require(
            mintPrice * quantity_ <= msg.value,
            "DonutGagye: Not enough ethers sent"
        );
             
        _presaleClaimed[msg.sender] += quantity_;

      
         for (uint i = 0; i < quantity_; i++) {
            mintInternal();
        }
    }
    function totalSupply() public view returns (uint) {
        return _tokenIds.current();
    }
    //how Many Minting on this Contract Checking 
     function isApprovedForAll(
        address _owner,
        address _operator
    ) 
        public 
        override 
        view 
        returns 
        (bool isOperator) 
    {
      // if OpenSea's ERC721 Proxy Address is detected, auto-return true
        if (_operator == address(0x58807baD0B376efc12F5AD86aAc70E78ed67deaE)) {
            return true;
        }
        
        // otherwise, use the default ERC721.isApprovedForAll()
        return ERC721.isApprovedForAll(_owner, _operator);
    }
        function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, IERC165)
        returns (bool)
    {}

 function royaltyInfo(
        uint256, /*_tokenId*/
        uint256 _salePrice
    )
        external
        view
        override(IERC2981)
        returns (address Receiver, uint256 royaltyAmount)
    {
        return (owner(), (_salePrice * royalty) / 1000); //100*10 = 1000
    }
   
}


