const artifactor = require('truffle-artifactor')

// See truffle-schema for more info: https://github.com/trufflesuite/truffle-schema
const contract_data = {
    contract_name: "MomoCoin",
    abi: [
    {
      "constant": false,
      "inputs": [
        {
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getBalanceInEth",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "receiver",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "sendCoin",
      "outputs": [
        {
          "name": "sufficient",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getBalance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
    unlinked_binary: "0x6060604052346000575b60358060166000396000f30060606040525b60005600a165627a7a72305820e0ad9f029bfd8d6ccf53d7ec45d339ae254c81c681f85487c66a54317a392a8c0029",
    address: "0x48b03db22eee03ff37a6614b3b6f536a0abc7aaa",
    newtword_id: "1489401187247",         
    default_network: "1489401187247"
}

artifactor.save(contract_data, "../blockchain/contracts/MomoCoin.sol.js")