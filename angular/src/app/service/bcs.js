BCS = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    return await BCS.initWeb3();
  },

  initWeb3: async function() {
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      BCS.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      BCS.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
      web3 = new Web3(BCS.web3Provider);
    }
    return await BCS.initContract(); 
  },

  initContract: function() {  
    return $.getJSON("Products.json").then(function(products) {
      // Instantiate a new truffle contract from the artifact
      BCS.contracts.Products = TruffleContract(products);
      // Connect provider to interact with contract
      BCS.contracts.Products.setProvider(BCS.web3Provider);
    });
  },

  // Contract-----------------------------------------

  getProductsContract: async function(){
    return BCS.contracts.Products.deployed().then(function(deployed){return deployed;}) 
  },

  // Offers -----------------------------------------

  getOfferCount: async function(){    
    var productsInstance = await BCS.getProductsContract()    
    var offerCountResult = await BCS.getOfferCountInternal(productsInstance);
    return offerCountResult.c[0];
  },

  getOfferCountInternal: async function(productsInstance){ 
    return productsInstance.GetOfferCount.call();
  } ,

  getOfferBy: async function(pos){    
    var productsInstance = await BCS.getProductsContract()       
    var offerResult = await BCS.getOfferByInternal(productsInstance,pos);
    return offerResult;
  },

  getOfferByInternal: async function(productsInstance,pos){
    //return productsInstance.GetOfferBy.call(pos);
    var productsInstance;
    return BCS.contracts.Products.deployed().then(function (instance) {
      productsInstance = instance;
      return productsInstance.GetOfferBy(pos);});         
  },

  getOffers: async function(){    
    var count = await BCS.getOfferCount(); 
    var offers = []
    for(var i=0; i<count; i++)
    {
      var offer = await BCS.getOfferBy(i);
    
      offers.push({id: offer[0].c[0], productId: offer[1].c[0], owner: offer[3], productName: offer[4], offerStart: offer[5], offerEnd: offer[6]});   
    }  
    return offers;
  },
  
  passOn: async function(offerId,loanStart,loanEnd,secret){  
    var productsInstance;
    return BCS.contracts.Products.deployed().then(function (instance) {
      productsInstance = instance;
      return productsInstance.PassOn(offerId,loanStart,loanEnd,secret);});         
  },  

  // Products -----------------------------------------

  getProductCount: async function(){    
    var productsInstance = await BCS.getProductsContract()    
    var productCountResult = await BCS.getOfferCountInternal(productsInstance);
    return productCountResult.c[0];
  },

  getProductCountInternal: async function(productsInstance){ 
    return productsInstance.GetProductCount.call();
  },

  getProductBy: async function(pos){    
    var productsInstance = await BCS.getProductsContract()       
    var productResult = await BCS.getProductByInternal(productsInstance,pos);
    return productResult;
  },

  getOfferByInternal: async function(productsInstance,pos){
    //return productsInstance.GetOfferBy.call(pos);
    var productsInstance;
    return BCS.contracts.Products.deployed().then(function (instance) {
      productsInstance = instance;
      return productsInstance.GetProductBy(pos);});         
  },

  getProducts: async function(){    
    var count = await BCS.getProductCount(); 
    var offers = []
    for(var i=0; i<count; i++)
    {
      var offer = await BCS.getProductBy(i);
    
      offers.push({productId: offer[0].c[0], productName: offer[1], owner: offer[3]});   
    }  
    return offers;
  }

};

/*
$(function() {
  $(window).load(async function () {

    await BCS.init();  

    var offerCount = await BCS.getOfferCount(); 
    var offer = await BCS.getOfferBy(0); 
    var offers = await BCS.getOffers();   

    var productCount = await BCS.getProductCount(); 
    var product = await BCS.getProductBy(0); 
    var products = await BCS.getProducts();       
  });
});
*/

