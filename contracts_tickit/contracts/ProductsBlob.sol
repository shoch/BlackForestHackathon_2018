//solium-disable linebreak-style
//solium-disable max-len

pragma solidity ^0.4.4;

contract ProductsBlob{

    enum LoanStatus {  Booked, Lent, Returned, Failed }

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
        //uint ProductId;
        uint OfferId;
        uint LoanId;
        string Start;
        string End;
        address User; 
        LoanStatus Status;  
    }

    struct Offer{
        uint ProductId; 
        uint OfferId; 
        string Start;
        string End;
        uint PricePerDay; 
    }

    struct Product{
        uint  ProductId; 
        string ProductName;
        address Owner;                
    }    

    mapping (uint => Product) Products;  
    uint ProductsCount;

    mapping(uint =>Offer) Offers;
    uint OffersCount;  

    mapping(uint =>Loan) Loans;
    uint LoansCount;

    function AddProduct(address owner,string productName) public
    {
        Product memory newProduct;
        newProduct.ProductName = productName;
        newProduct.Owner = owner;
        newProduct.ProductId = ProductsCount;

        Products[ProductsCount] = newProduct;
        ProductsCount = ProductsCount + 1;
    }

    function AddOffer(uint productPos, string startTime, string endTime, uint pricePerDay  ) public
    {
        Offer memory newOffer;
        newOffer.Start = startTime;
        newOffer.End = endTime;
        newOffer.PricePerDay = pricePerDay;   
        newOffer.ProductId = productPos;
        newOffer.OfferId = OffersCount;

        Offers[OffersCount] = newOffer;
        OffersCount = OffersCount + 1;
    }

    function AddLoan( uint offerPos, string startTime, string endTime, address user, LoanStatus loanStatus) public
    {        
        Loan memory newLoan;
        newLoan.Start = startTime;
        newLoan.End = endTime;
        newLoan.User = user;   
        newLoan.OfferId = offerPos;
        newLoan.LoanId = LoansCount;    
        newLoan.Status = loanStatus;   
        
        Loans[LoansCount] = newLoan;
        LoansCount = LoansCount + 1;
    }

    function GetOfferBy(uint posOffer) public view returns (uint, uint, address, string, string, string){    
        Offer memory o = Offers[posOffer];
        Product memory p = Products[o.ProductId];

        return (o.ProductId, o.OfferId, p.Owner, p.ProductName, o.Start, o.End);
    }

    
    function GetProductBy(uint posProduct) public view returns (uint, string, address){    
        Product memory p = Products[posProduct];
        return (p.ProductId, p.ProductName,p.Owner);
    }
   
    /*function GetLoanBy(uint posLoan) public view returns (uint, string, address, string, string){    
        //Offer memory o = Offers[posOffer];
        //Product memory p = Products[o.OfferId];

        //return (1, p.ProductName,p.Owner,o.Start,o.End);
    }*/ 

    /* function PassOn(uint offerPos, string startTime, string endTime) public  //secret als param; User auslesen
    {
        LoanStatus status;
        if(msg.sender == Products[Offers[offerPos].LoanId].owner)
        {
            status = LoanStatus.Returned;
        }
        else if(//not Exists offer)
        {
            AddLoan(offerPos,startTime,endTime,msg.sender, LoanStatus.Booked);        
        }
        else if(//Exists offer user != owner )
        {
            status = LoanStatus.Lent;
        }       
    }

    function GetLoanBy(offerPos,startTime,endTime) public view returns (Loan)
    {

    }*/

    function GetOfferCount() public view returns (uint){
        return OffersCount; 
    }
    
    function GetProductCount() public view returns (uint){
        return ProductsCount; 
    }

    function GetLoanCount() public view returns (uint){
        return LoansCount; 
    }
    
}