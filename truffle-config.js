const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
  privateKeys: ['499ca245248bf55a2677e82c30b3ac899ec7788d9bc6a1e2d716b6d3b1b74139'],
  providerOrUrl: 'HTTP://127.0.0.1:7545/'
});

module.exports = {
  networks: {
    development: {
      provider: () => provider,
      network_id: "5777"
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.0", 
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
