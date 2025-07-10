import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";


export function ShowBalance(){

    const {connection} = useConnection();
    const wallet = useWallet();


    async function getMeUserbalance() {
      const balance =  await  connection.getBalance(wallet.publicKey);
      document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
    }
    getMeUserbalance();

    return (
        <div>
           Balance: <span id="balance"></span> SOL
        </div>
    )
}