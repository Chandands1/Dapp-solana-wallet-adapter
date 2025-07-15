# 🚀 Solana Token DApp

A decentralized application (DApp) built with React and the Solana Wallet Adapter that allows users to:
- Connect their Solana wallet
- Request SOL from Devnet
- Send SOL to another wallet
- Check their balance
- Sign a message

---

## 📚 About the Project

This project was created as part of the **100xDevs Cohort 3.0 - Web3 Week 8**, where we learned how DApps function and how to integrate wallets using the Solana Wallet Adapter.

### 🔗 What is a DApp?

A **DApp (Decentralized Application)** is similar to any app you use—but instead of running on centralized servers, it runs on a **blockchain**, giving users **control**, **transparency**, and **censorship resistance**.

### 💳 Solana Wallet Adapter

The **Solana Wallet Adapter** acts as a bridge between your Solana wallet and the DApp, allowing you to:
- Connect your wallet
- Interact with the blockchain
- Sign transactions and messages

---

## 🧰 Tech Stack

- **React** (Vite)
- **Solana Web3.js**
- **Solana Wallet Adapter**
- **JavaScript / JSX**

---

## 📦 Dependencies

Install the following packages:

```bash
npm install --save \
  @solana/web3.js \
  @solana/wallet-adapter-base \
  @solana/wallet-adapter-react \
  @solana/wallet-adapter-react-ui \
  @solana/wallet-adapter-wallets \
  react
```

---

## ⚙️ How to Run

1. **Clone the repository**

   ```bash
   git clone https://github.com/chandands1/Dapp-solana-wallet-adapter.git
   cd solana-token-dapp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## 💡 Features

- 🔗 **Connect Wallet** – using Phantom or any other supported wallet
- 💸 **Request Airdrop** – get SOL from Devnet
- 📤 **Send Tokens** – transfer SOL to any valid address
- 📊 **Check Balance** – see current SOL balance
- ✍️ **Sign Message** – sign and verify messages using wallet

---

## 🧪 Network

> The app runs on **Solana Devnet**. Make sure your wallet is set to Devnet before testing.

---

## 🙌 Acknowledgments

Thanks to [Harkirat Singh](https://twitter.com/kirat_tw) and the [100xDevs](https://100xdevs.com) community for providing guidance and resources.
