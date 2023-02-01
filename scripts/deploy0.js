//imports
const { ethers } = require("hardhat");

// async main
const main = async () => {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying, be patient.");
  const simpleStorageCon = await SimpleStorageFactory.deploy();
  await simpleStorageCon.deployed();
  console.log(`Deployed contract address: ${simpleStorageCon.address}`);
};

// main
main()
  .then(() => process.exit())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
