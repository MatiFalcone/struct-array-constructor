require("@nomicfoundation/hardhat-toolbox");
const { mnemonic } = require('./.secrets.json');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      gas: 19000000,
      allowUnlimitedContractSize: true,
      timeout: 1800000,
      accounts: { mnemonic: mnemonic }
    },
    mainnet: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/qthz4_6kfuPquCG5N1A6v5Waz9YW0pNZ",
      chainId: 137,
      gasPrice: "auto",
      accounts: { mnemonic: mnemonic }
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/c3bf17f85f294d4ca2c90febc415ee52",
      chainId: 4,
      gasPrice: "auto",
      accounts: { mnemonic: mnemonic },
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com/",
      chainId: 80001,
      gasPrice: "auto",
      accounts: { mnemonic: mnemonic }
    }
  }
};
