//solium-disable linebreak-style
//solium-disable max-len

pragma solidity ^0.4.4;

contract ProductsBlob{

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
        uint LoanCount;     
    }

    struct Product{
        string ProductName;
        address Owner;
        mapping(uint =>Offer) Offers;
        uint OffersCount;     
    }

    mapping (uint => Product) private Products;  
    uint private ProductsCount;

    function AddProduct(address owner,string productName) public returns (uint)
    {
        Product memory newProduct;
        newProduct.ProductName = productName;
        newProduct.Owner = owner;

        Products[ProductsCount] = newProduct;
        ProductsCount = ProductsCount + 1;

        return ProductsCount - 1;
    }

    function AddOffer(uint productPos, string startTime, string endTime, uint pricePerDay  ) public returns (uint)
    {
        Offer memory newOffer;
        newOffer.Start = startTime;
        newOffer.End = endTime;
        newOffer.PricePerDay = pricePerDay;   

        Products[productPos].Offers[Products[productPos].OffersCount] = newOffer;
        Products[productPos].OffersCount = Products[productPos].OffersCount + 1;

        return Products[productPos].OffersCount - 1;
    }
    
    function GetOfferBy(uint pos) public view returns (uint, string, address, string, string){    
       
        //Product memory p = Products[pos]; 
        // todo weiteres object
        return (1,"productName",0x1,"1.10.2018","30.10.2018");
    }
    
    function GetOffersCount() public returns (uint){
        return 2; // offers count nicht offerscount -1
    }
    
}