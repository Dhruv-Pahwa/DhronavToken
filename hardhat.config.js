require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    bttcDonau: {
      url: "https://pre-rpc.bt.io",
      chainId: 1029,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
