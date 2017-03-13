import React from 'react'
import ReactDOM from 'react-dom'
import Artifactor from '../../config/.sol.js'
import MomoCoin from '../../contracts/MomoCoin.sol'

Artifactor.save({/*...*/}, './MomoCoin.sol.js')    // => a promise

/*
===============================================
    HOW TO INTERACT WITH THE CONTRACT 
===============================================

    MomoCoin.deployed().then(instance => {
        instace.doStuff();  // <-- matches the doStuff() function within MomoCoin.sol.
    }).then(result => {
        // We just made a transaction, and it's been mined!
        // We're given transaction hash, logs (events) and receipt for further processing.
        console.log(result.tx, result.logs, result, result.receipt)
    })

*/


/*
=======================================
    BLOCKCHAIN COMPATIBILITY STUFF
=======================================
*/

MomoCoin.setProvider(window.web3.currentProvider);

window.addEventListener('load', function() {
    // Supports Metamask and Mist, and other wallets that provide 'web3'.
    if (typeof web3 != 'undefined') {
        // Use the Mist/wallet provider.
        window.web3 = new Web3(web3.currentProvider);
    } else {
        // No web3 deteceted. Show an error to the user.
        alert('Please downlaod the Metamask chrome extension in order to use this application.');
        // TODO: replace alert with Infura (https://infura.io/). 
    }
})


/*
=================================
    APPLICATION LOGIC
=================================
*/

ReactDOM.render(
    <App />,
    document.getElementById('root')
)