require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');
require('@eth-optimism/hardhat-ovm');
require('hardhat-deploy');
require('dotenv').config();

module.exports = {
  networks: {
    optimism: {
      url: 'https://kovan.optimism.io',
      accounts: [process.env.YOUR_PRIVATE_KEY],
      // This sets the gas price to 0 for all transactions on L2. We do this
      // because account balances are not automatically initiated with an ETH
      // balance (yet, sorry!).
      gasPrice: 0,
      ovm: true, // This sets the network as using the ovm and ensure contract will be compiled against that.
    },
    kovan: {
      url: 'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      accounts: [process.env.YOUR_PRIVATE_KEY],
      // This sets the gas price to 0 for all transactions on L2. We do this
      // because account balances are not automatically initiated with an ETH
      // balance (yet, sorry!).
      gasPrice: 0,
    },
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },
  ovm: {
    solcVersion: '0.8.0',
  },
  namedAccounts: {
    deployer: 0,
  },
};
