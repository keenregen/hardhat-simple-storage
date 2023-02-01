require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const goerliRpcPoint = process.env.goerliRpcPoint;
const goerliKeyA = process.env.goerliKeyA;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: goerliRpcPoint,
      accounts: [goerliKeyA],
      chainId: 5,
    },
  },
  solidity: "0.8.7",
};
