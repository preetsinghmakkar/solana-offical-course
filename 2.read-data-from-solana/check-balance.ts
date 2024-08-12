import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("BB32eiKY1X6TgQ3Bzj9CTWb5gRiShNExyscrERL4QBqU");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);

console.log(balanceInLamports);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);
