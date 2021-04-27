const BaseToken = artifacts.require("BaseToken");

module.exports = async function (deployer, network) {
  await deployer.deploy(BaseToken, "decelerated Bitshares", "dBTS", 5, 3600570502, 20000, false, false, "0xb4a19FA2196519641959c2Dd316daBe667F3fBd0");
  const baseToken = await BaseToken.deployed();
  console.log(`BaseToken deployed at ${baseToken.address} in network: ${network}`);
};
