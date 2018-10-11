var ShareTicket = artifacts.require("./ShareTicket.sol");

module.exports = function(deployer) { 
  deployer.deploy(ShareTicket);
};
