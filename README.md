Solana Wallet Adapter:
----------------------

This project is a React-based Solana Wallet Adapter application that enables users to connect to a Solana wallet, request Devnet SOL, display their SOL balance, send transactions, and sign messages. It leverages the @solana/wallet-adapter-react and @solana/web3.js libraries to interact with the Solana blockchain on the Devnet network.
Features

============================

Connect to Wallet: Seamlessly connect to Solana wallets like Phantom or Solflare.
Request Devnet SOL: Airdrop Devnet SOL to your wallet for testing.
Show SOL Balance: Display the current SOL balance of the connected wallet.
Send Transaction: Transfer SOL to another Solana address.
Sign Message: Sign a custom message for authentication or verification purposes.

===========================

Prerequisites

Node.js: Version 14.x or higher.
npm or yarn: Package manager for installing dependencies.
Solana Wallet: A browser extension wallet (e.g., Phantom or Solflare) set to Devnet.
Code Editor: VS Code or any editor of your choice.
Basic Knowledge: Familiarity with React, TypeScript/JavaScript, and Solana blockchain concepts.


=============================

Installation

Clone the Repository:
git clone https://github.com/Chandands1/Dapp-solana-wallet-adapter.git
cd Dapp-solana-wallet-adapter


Install Dependencies:Using npm:
npm install



Install Solana Wallet Adapter Libraries:Ensure the following packages are installed:
npm install @solana/web3.js @solana/wallet-adapter-base @solana/wallet-adapter-react @solana/wallet-adapter-react-ui @solana/wallet-adapter-wallets bs58


Start the Application:
npm run dev

The app will be available at http://localhost:5173.




================================



Running the Application

Ensure your wallet is set to Devnet.
Open http://localhost:5173 in a browser with a Solana wallet extension installed.
Click the WalletMultiButton to connect your wallet.
Use the provided buttons to:
Request a Devnet SOL airdrop.
View your SOL balance.
Send SOL to another address.
Sign a custom message.

=========================

Resources

Solana Wallet Adapter Documentation
Solana Web3.js Documentation
Solana Devnet
Phantom Wallet
Solflare Wallet
====================

Contributing
Contributions are welcome! Please submit a pull request or open an issue on the GitHub repository.
License
This project is licensed under the MIT License.
