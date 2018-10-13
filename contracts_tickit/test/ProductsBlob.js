var productsBlob = artifacts.require("./ProductsBlob.sol");

contract("ProductsBlob",
function(accounts) {
    var productsInstance;      

    /*it("Add Product", function () {
        return productsBlob.deployed().then(function (instance) {
            productsInstance = instance;
           // return productsInstance.AddProduct(0xce67e2ab70671e5d0b8499c07e2e6cdb6f75ed12,"Test1");
        return productsInstance.AddProduct();
        }).then(function (retunValue) {
            console.log(retunValue);
            assert.equal(retunValue, 0);            
        });
    });*/   

    it("GetOffersCount", function () {
        return productsBlob.deployed().then(function (instance) {
            productsInstance = instance;
            return productsInstance.GetOfferCount();
        }).then(function (retunValue) {           
            assert.equal(retunValue.c[0], 5);            
        });
    });

    it("GetOfferBy for offer 0", function () {
        return productsBlob.deployed().then(function (instance) {
            productsInstance = instance;
            return productsInstance.GetOfferBy(0);
        }).then(function (retunValue) {                   
            assert.equal(retunValue[0].c[0], 0);  
            assert.equal(retunValue[1].c[0], 0);     
            assert.equal(retunValue[2], "0xabd49c5238abbf0b5f07ce6f357f3b871d33f045");     
            assert.equal(retunValue[3], "RegioKarte");     
            assert.equal(retunValue[4], "6.10.2018"); 
            assert.equal(retunValue[5], "7.10.2018");
        });
    });

    it("GetOfferBy for offer 1", function () {
        return productsBlob.deployed().then(function (instance) {
            productsInstance = instance;
            return productsInstance.GetOfferBy(1);
        }).then(function (retunValue) {                  
            assert.equal(retunValue[0].c[0], 0);  
            assert.equal(retunValue[1].c[0], 1);     
            assert.equal(retunValue[2], "0xabd49c5238abbf0b5f07ce6f357f3b871d33f045");     
            assert.equal(retunValue[3], "RegioKarte");
            assert.equal(retunValue[4], "20.10.2018"); 
            assert.equal(retunValue[5], "21.10.2018");   
        });
    }); 
});
