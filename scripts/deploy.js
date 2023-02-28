const { ethers } = require("hardhat");

async function main() {

  console.log("Deploying Test...");
  
  // Constructor variables
  const DETAILS = [["ERC20", "0xfe02781cc0fe76Bfd2D211430bfa97D2889fd853", 0, 0]]

  // Contracts are deployed using the first signer/account by default
  const Test = await ethers.getContractFactory("Test");
  const test = await Test.deploy(
    DETAILS
  );
  await test.deployed();
  
  console.log("Contract deployed to: ", test.address);

}

main().catch((error) => {
   console.error(error);
   process.exitCode = 1;
});