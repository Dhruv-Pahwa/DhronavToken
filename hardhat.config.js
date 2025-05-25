require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    bttcDonau: {
      url: "https://pre-rpc.bt.io", // BTTC Donau Testnet RPC
      chainId: 1029,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
