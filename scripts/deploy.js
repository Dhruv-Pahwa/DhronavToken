const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("DhronavToken");
  const token = await Token.deploy();   // deploy() itself waits for deployment in ethers v6
  console.log(`DhronavToken deployed to: ${token.target}`);  // Use token.target for deployed address in ethers v6
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
