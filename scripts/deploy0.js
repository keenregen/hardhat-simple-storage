//imports
const { ethers } = require("hardhat");

// async main
const main = async () => {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying, be patient.");
  const simpleStorageCon = await SimpleStorageFactory.deploy();
  await simpleStorageCon.deployed();
  console.log(`Deployed contract address: ${simpleStorageCon.address}`);

  // interact with the contract
  let currentFavNum = await simpleStorageCon.retrieve();
  console.log(`Current Fav Num: ${currentFavNum.toString()}`);

  const storeResp = await simpleStorageCon.store(1111);
  await storeResp.wait(1);

  currentFavNum = await simpleStorageCon.retrieve();
  console.log(`The Fav Number now: ${currentFavNum.toString()}`);
};

// main
main()
  .then(() => process.exit())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
