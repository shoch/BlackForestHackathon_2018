//solium-disable linebreak-style
//solium-disable max-len

pragma solidity ^0.4.4;

contract ProductsBlob{

    constructor() public
    {  
        AddProduct(0xabd49c5238abbf0b5f07ce6f357f3b871d33f045,"RegioKarte");
        AddProduct(0xcaaf3b8e02a42111530f2b23d566b50a43df05ab,"Bohrmaschine");     
        AddProduct(0xae7f8dce41c4cbff215b46f3b01004114037113e,"Dachbox");
        AddProduct(0x6134b21e2f52d93a53f4595ed20a345f2644091d,"Flugzeug");   
  
        AddOffer(0,"6.10.2018","7.10.2018",8);
        AddOffer(0,"20.10.2018","21.10.2018",8);
        AddOffer(1,"1.10.2018","1.1.2019",10);
        AddOffer(2,"1.10.2018","29.04.2019",7);
        AddOffer(3,"3.10.2018","12.10.2018",2000);
    } 

    struct Loan{
        string Start;
        string End;
        address User;
    }

    struct Offer{
        string Start;
        string End;
        uint PricePerDay;   
        mapping(uint =>Loan) Loans;
        uint LoansCount;     
    }

    struct Product{
        string ProductName;
        address Owner;
        mapping(uint =>Offer) Offers;
        uint OffersCount;     
    }
    

    mapping (uint => Product) Products;  
    uint ProductsCount;

    function AddProduct(address owner,string productName) public
    {

        Product memory newProduct;
        newProduct.ProductName = productName;
        newProduct.Owner = owner;
        
        Products[ProductsCount] = newProduct;
        ProductsCount = ProductsCount + 1;
    }

    function AddOffer(uint productPos, string startTime, string endTime, uint pricePerDay  ) public
    {
        Offer memory newOffer;
        newOffer.Start = startTime;
        newOffer.End = endTime;
        newOffer.PricePerDay = pricePerDay;   

        Products[productPos].Offers[Products[productPos].OffersCount] = newOffer;
        Products[productPos].OffersCount = Products[productPos].OffersCount + 1;
    }

    function AddLoan(uint productPos, uint offerPos, string startTime, string endTime, address user) public
    {        
        Loan memory newLoan;
        newLoan.Start = startTime;
        newLoan.End = endTime;
        newLoan.User = user;   

        Product storage prod = Products[productPos];
        Offer storage off = prod.Offers[offerPos];
        off.Loans[off.LoansCount] = newLoan;
        off.LoansCount = off.LoansCount + 1;
    }

    function GetOfferBy(uint pos) public view returns (uint, string, address, string, string){    
        return (1,"productName",0xce67e2ab70671e5d0b8499c07e2e6cdb6f75ed12,"1.10.2018","30.10.2018");
    }

    function GetOffersCount() public view returns (uint){
        return 2; // offers count nicht offerscount -1
    }
    
    
}