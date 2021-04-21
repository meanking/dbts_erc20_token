const BaseToken = artifacts.require("BaseToken");

module.exports = function (deployer, network) {
  await deployer.deploy(BaseToken, "btstest", "ML", 18, 10000000000, 300000000, false, false);
  const baseToken = await BaseToken.deployed();
  console.log(`BaseToken deployed at ${baseToken.address} in network: ${network}`);
};
