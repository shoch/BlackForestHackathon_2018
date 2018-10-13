//var products = artifacts.require("./Products.sol");
//var product = artifacts.require("./Product.sol");
//var offer = artifacts.require("./offer.sol");
//var loan = artifacts.require("./loan.sol");
var productsBlob = artifacts.require("./productsBlob.sol");


module.exports = function(deployer) { 
  //deployer.deploy(products); 
  //deployer.deploy(product); 
  //deployer.deploy(offer); 
  //deployer.deploy(loan); 
  deployer.deploy(productsBlob); 
};
