//solium-disable linebreak-style
//solium-disable max-len

pragma solidity ^0.4.4;

import "./Product.sol";
contract Products{

    function GetOfferBy(uint id) public returns (  uint  ,    string  ,    address, string, string  ){    
    
     //   return ( allProductsL[1].id,allProductsA[id].productName,allProductsA[id].owner,"","");
       return (1,"productName",0x1,"1.10.2018","30.10.2018");
    }

    function GetOffersCount() public returns (uint){
        //return allProductsA(1).id;
        //return allProductsA[1].id;
        return 2;
    }
}

contract Product{ 
    productStruct[] public allProductsA;
    mapping(uint256 => productStruct) allProductsL;

    struct productStruct
    {
        uint id;
        string productName;
        address owner;
    }
    
    function GetTestCount() public returns (uint){
        return allProductsL[1].id;
        //return 2;
    }
}