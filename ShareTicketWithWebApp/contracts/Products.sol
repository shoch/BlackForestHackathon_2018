//solium-disable linebreak-style
//solium-disable max-len

pragma solidity ^0.4.4;

import "./Product.sol";


contract Products{
  
    function GetOfferBy(uint Id) public view returns (uint,string,address,string,string){
        return (1,
                "productName",
                0xce67e2ab70671e5d0b8499c07e2e6cdb6f75ed12,"1.10.2018","30.10.2018");
    }

    function GetOffersCount() public view returns (uint){
        return 2;
    }
}