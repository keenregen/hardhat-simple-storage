const { ethers } = require("hardhat");
const { expect, assset, assert } = require("chai");

describe("SimpleStorage", () => {
     let SimpleStorageFactory, simpleStorageCon;
     beforeEach(async () => {
          SimpleStorageFactory = await ethers.getContractFactory(
               "SimpleStorage"
          );
          simpleStorageCon = await SimpleStorageFactory.deploy();
          await simpleStorageCon.deployed();
     });

     // it.only if only this test is to be done
     it("Should start with FavNum = 0", async () => {
          const currentVal = await simpleStorageCon.retrieve();
          const expectedVal = "0";
          assert.equal(currentVal.toString(), expectedVal);
          // expect(currentVal.toString()).to.equal(expectedVal);
     });
     // it.only if only this test is to be done
     it("Should update the favNum when we call store func", async () => {
          const expectedVal = "15";
          const storeResp = await simpleStorageCon.store(expectedVal);
          await storeResp.wait(1);

          const curVal = await simpleStorageCon.retrieve();

          assert.equal(curVal.toString(), expectedVal);
     });
});
