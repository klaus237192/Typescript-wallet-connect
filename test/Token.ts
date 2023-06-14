const { expect } = require("chai")
const {ethers} =require("hardhat")
describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();
    console.log(owner.getAddress());
    const hardhatToken = await ethers.deployContract("SpaceCredit");
    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    console.log(ownerBalance);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});