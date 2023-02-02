require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-gas-reporter");
require("solidity-coverage");

const goerliRpcPoint = process.env.goerliRpcPoint || "";
const goerliKeyA = process.env.goerliKeyA || "";

const localHostRpcPoint = process.env.localHostRpcPoint || "";

const cMarCapApiKey = process.env.cMarCapApiKey || "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
     solidity: "0.8.7",
     defaultNetwork: "hardhat",
     networks: {
          goerli: {
               url: goerliRpcPoint,
               accounts: [goerliKeyA],
               chainId: 5,
          },
          localhost: {
               url: localHostRpcPoint,
               // we don't need to specify an account, automatically given via hh
               chainId: 31337,
          },
     },
     gasReporter: {
          enabled: false,
          outputFile: "gasReport.txt",
          noColors: true,
          currency: "USD",
          coinmarketcap: cMarCapApiKey,
          token: "ETH",
     },
};
