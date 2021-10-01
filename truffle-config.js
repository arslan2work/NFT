const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
  privateKeys: ['c573eb0dcb727584db8577f5fcb8a6dcec25888edfdc9ca4a21f239b43771d75'],
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
