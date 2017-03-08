pragma solidity ^0.4.0;

contract MomoCoin {

    address public minter;
    mapping(address => uint) public balances;

    // Events allow light clients to react on changes efficiently
    event Sent(address from, address to, uint amount);

    // This is the construtor whose code is run only when the contract is created.
    function MomoCoin() {
        minter = msg.sender;
    }
    
    function mint(address receiver, uint amount) {
        // If sender != person who created this contract (me)
        if (msg.sender != minter) return;
        balances[receiver] += amount;
    }

    function send(address receiver, uint amount) {
        if (balances[msg.mesender] < amount) return;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        Sent(msg.sender, receiver, amount);
    }
}


