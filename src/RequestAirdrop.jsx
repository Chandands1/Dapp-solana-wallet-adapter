import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";



export function RequestAirdrop() {
  const wallet = useWallet();
  const {connection}= useConnection();

  function requestAirdrop() {
    const publicKey = wallet.publicKey;
    const amount = document.getElementById("amount").value;
    connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL );
  }

  return (
    <div>
      <input id="amount" type="text" placeholder="Amount..." /> <br />
      <button onClick={requestAirdrop}>Request Airdrop</button> <br /> <br />
      
     
    </div>
  );
}
