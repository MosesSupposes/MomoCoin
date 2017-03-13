var ConvertLib = artifacts.require("./ConvertLib.sol");
var MomoCoin = artifacts.require("./MomoCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MomoCoin);
  deployer.deploy(MomoCoin);
};
