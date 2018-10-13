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
            return productsInstance.GetOffersCount();
        }).then(function (retunValue) {
            console.log(retunValue);
            assert.equal(retunValue.c[0], 2);            
        });
    });
    
});
