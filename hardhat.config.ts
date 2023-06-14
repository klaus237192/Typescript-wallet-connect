import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = "mAROgYqxEpY1dWbR4J_2oUS2Imy4UK_L";
const SEPOLIA_PRIVATE_KEY = "5a8025c61b6fb24982f988b05b44f46734b61c1ccf2887e8beea221b474c3f2a";
 module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  },
  
};
