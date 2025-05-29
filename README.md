# 🛡️ DhronavToken

DhronavToken is an ERC-20 compliant smart contract deployed on the **BTTC Donau Testnet**. Designed with simplicity and scalability in mind, this token demonstrates blockchain-based tokenization for potential real-world applications, with emphasis on defense, research, and innovation.

## 🚀 Deployed On

- **Network:** BTTC Donau Testnet  
- **Contract Address:** `0xcF04CAE4f7Caf74Cef709e5dAc97F59Cce6A9F6A`  
- **Token Name:** `DhronavToken`  
- **Token Symbol:** `DHR`  
- **Decimals:** `18`

> ✅ Verified on BTTC Donau Testnet Explorer  
> 🔗 [View on BTTCScan](https://testscan.bt.io/address/0xcF04CAE4f7Caf74Cef709e5dAc97F59Cce6A9F6A)

---

## 📁 Project Structure

```
drdo-token/
├── contracts/
│   └── DhronavToken.sol        # The ERC-20 smart contract
├── scripts/
│   └── deploy.js               # Deployment script using Hardhat
├── hardhat.config.js           # Hardhat configuration
├── package.json
└── README.md
```

---

## 🔧 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [Hardhat](https://hardhat.org)
- [MetaMask](https://metamask.io/)
- BTTC Donau Testnet added to MetaMask

---

## 📦 Install Dependencies

```bash
npm install
```

If you face peer dependency issues, use:

```bash
npm install --legacy-peer-deps
```

---

## 📜 Smart Contract - `DhronavToken.sol`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DhronavToken is ERC20 {
    constructor() ERC20("DhronavToken", "DHR") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
```

---

## 📤 Deploying the Contract

Update `hardhat.config.js` with your BTTC Donau RPC and private key (never commit secrets to GitHub).

```bash
npx hardhat run scripts/deploy.js --network bttcDonau
```

---

## 📄 Output Example

```bash
Compiled 1 Solidity file successfully (evm target: paris).
DhronavToken deployed to: 0xcF04CAE4f7Caf74Cef709e5dAc97F59Cce6A9F6A
```

---

## 🧪 Test the Contract

You can test your contract locally using:

```bash
npx hardhat test
```

Write tests in `test/DhronavToken.js`.

---

## ✨ Features

- Fully ERC-20 compliant
- Deployed on BTTC Donau
- Token info easily accessible on blockchain explorer
- Open source & developer friendly

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

- BTTC (BitTorrent Chain) Testnet  
- Hardhat by Nomic Foundation  
- OpenZeppelin Contracts  

---

## 👨‍💻 Author

**Dhruv Pahwa**  
🌐 [LinkedIn](https://www.linkedin.com/in/dhruvpahwa/)  
📧 [Email](mailto:dhruvpahwa02@gmail.com)

---

> “Built to empower decentralized defense and innovation.”
