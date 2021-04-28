const BaseToken = artifacts.require("BaseToken");

module.exports = async function (deployer, network) {
  await deployer.deploy(BaseToken, "decelerated Bitshares", "dBTS", 5, 360057050200000, 2000000000, false, false, "0xCAcEafFFEEb1da7d3E60c5D236aB0F35e4079554");
  const baseToken = await BaseToken.deployed();
  console.log(`BaseToken deployed at ${baseToken.address} in network: ${network}`);
};
