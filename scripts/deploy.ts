import { ethers } from "hardhat";
async function main() {
  const [depolyer] = await ethers.getSigners();

  const lock = await ethers.deployContract("SpaceCredit");
  
  console.log("SPD address", await lock.getAddress())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
