const dotenv = require('dotenv');
dotenv.config();

const HDWalletProvider = require("@truffle/hdwallet-provider");
const infuraKey = process.env.INFURA_KEY;
const fromAddress = process.env.FROM_ADDRESS;
const privatekeys = [ process.env.PRIVATE_KEYS ];
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777,
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          privatekeys,
          `https://ropsten.infura.io/v3/${infuraKey}`
        ),
      network_id: 3,
      networkCheckTimeout: 10000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      from: fromAddress,
      // optional config values:
      // gas
      // gasPrice
      // from - default address to use for any transaction Truffle makes during migrations
      // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
      //          - function that returns a web3 provider instance (see below.)
      //          - if specified, host and port are ignored.
      // skipDryRun: - true if you don't want to test run the migration locally before the actual migration (default is false)
      // confirmations: - number of confirmations to wait between deployments (default: 0)
      // timeoutBlocks: - if a transaction is not mined, keep waiting for this number of blocks (default is 50)
      // deploymentPollingInterval: - duration between checks for completion of deployment transactions
      // disableConfirmationListener: - true to disable web3's confirmation listener
    },
    main: {
      provider: () =>
        new HDWalletProvider(
          privatekeys,
          `https://mainnet.infura.io/v3/${infuraKey}`
        ),
      network_id: 1,
      gas: 6000000,
      gasPrice: 130000000000,
      confirmations: 2,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.8",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: "petersburg",
      },
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: etherscanApiKey,
  },
};
