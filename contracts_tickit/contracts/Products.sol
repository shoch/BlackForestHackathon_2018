//solium-disable linebreak-style
//solium-disable max-len

pragma solidity ^0.4.4;

import "./Product.sol";


contract Products{

    function GetOfferBy(uint id) public returns (  uint  ,    string  ,    address, string, string  ){
        return (1,"productName",0x1,"1.10.2018","30.10.2018");
    }

    function GetOffersCount() public returns (uint){
        return 2;
    }
}